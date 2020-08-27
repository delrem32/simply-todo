import React, { useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import "./board-content.css";
import BoardList from "./board-list/board-list";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TextareaAutosize from "react-textarea-autosize";
import {
	addColumn,
	updateColumnOrder,
	updateColumns,
} from "../../../actions/actions";

function BoardContent(props) {
	const { columns, tasks, columnOrder } = props;

	const [visible, setVisible] = useState(false);
	const ref = useRef(null);
	const textAreaRef = useRef(null);

	function submitColumn() {
		try {
			props.addColumn(textAreaRef.current.value.trim());
			handleVisibility();
		} catch (e) {
			console.log(e);
		}
	}

	const onDragEnd = (result) => {
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		if (type === "column") {
			const newColumnOrder = Array.from(columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			props.updateColumnOrder(newColumnOrder);
		}

		if (type === "task") {
			const start = columns.find(
				(column) => column.id === source.droppableId
			);
			const finish = columns.find(
				(column) => column.id === destination.droppableId
			);

			if (start === finish) {
				const newTaskIds = Array.from(start.taskIds);
				newTaskIds.splice(source.index, 1);
				newTaskIds.splice(destination.index, 0, draggableId);

				const newColumn = {
					...start,
					taskIds: newTaskIds,
				};

				return props.updateColumns([
					...columns.map((column) =>
						column.id === newColumn.id ? newColumn : column
					),
				]);
			}
			// Moving tasks between columns
			const startTaskIds = Array.from(start.taskIds);
			startTaskIds.splice(source.index, 1);
			const newStart = {
				...start,
				taskIds: startTaskIds,
			};

			const finishTaskIds = Array.from(finish.taskIds);
			finishTaskIds.splice(destination.index, 0, draggableId);
			const newFinish = {
				...finish,
				taskIds: finishTaskIds,
			};
			return props.updateColumns([
				...columns.map((column) => {
					if (column.id === newStart.id) {
						return newStart;
					}
					if (column.id === newFinish.id) {
						return newFinish;
					}
					return column;
				}),
			]);
		}
	};
	const clickListener = useCallback((e) => {
		if (ref.current) {
			if (!ref.current.contains(e.target)) {
				document.removeEventListener("click", clickListener);
				setVisible(false);
			}
		}
	}, []);
	const textAreaContainerRef = useCallback(
		(node) => {
			if (node) {
				document.addEventListener("click", clickListener);
				textAreaRef.current.focus();
				textAreaRef.current.scrollIntoView();
			}
		},
		[clickListener]
	);
	function handleVisibility() {
		if (visible) {
			document.removeEventListener("click", clickListener);
			setVisible(!visible);
		}
		setVisible(!visible);
	}
	function addList(visible) {
		if (visible) {
			return (
				<div className="add-list-container" ref={ref}>
					<div
						className="add-list-textarea-container"
						ref={textAreaContainerRef}
					>
						<TextareaAutosize
							ref={textAreaRef}
							className="add-list-textarea"
							placeholder="Geben Sie einen Titel für diese Liste ein ..."
							minRows={2}
						></TextareaAutosize>
					</div>
					<div className="add-list-btn-container">
						<button className="new-card-btn" onClick={submitColumn}>
							Liste hinzufügen
						</button>
						<button
							className="new-card-close"
							onClick={handleVisibility}
						>
							<i className="material-icons-outlined bl-24">
								close
							</i>
						</button>
					</div>
				</div>
			);
		}
	}
	function buttonAddList(visible) {
		if (!visible) {
			return (
				<button
					className="board-new-list-btn"
					onClick={handleVisibility}
				>
					<div>
						<i className="material-icons-outlined md-light vl-16">
							add
						</i>
					</div>
					<div className="new-list-text">
						Eine weitere Liste hinzufügen
					</div>
				</button>
			);
		}
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className="board-content-wrapper">
				<Droppable
					droppableId="all-columns"
					direction="horizontal"
					type="column"
				>
					{(provided) => (
						<div
							className="usable-lists"
							{...provided.droppableProps}
							ref={provided.innerRef}
						>
							{columnOrder.map((columnId, index) => {
								const column = columns.find(
									(column) => column.id === columnId
								);
								const tasksByColumn = column.taskIds
									.map((taskId) => {
										return [
											...tasks.filter(
												(task) => task.id === taskId
											),
										];
									})
									.flat();

								return (
									<BoardList
										key={column.id}
										column={column}
										tasks={tasksByColumn}
										index={index}
									/>
								);
							})}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				<div className="board-content">
					{buttonAddList(visible)}
					{addList(visible)}
				</div>
			</div>
		</DragDropContext>
	);
}

const mapStateToProps = (state) => {
	return {
		columns: state.columns,
		tasks: state.tasks,
		columnOrder: state.columnOrder,
	};
};

const mapStateToDispatch = (dispatch) => {
	return {
		addColumn: (title) => dispatch(addColumn(title)),
		updateColumnOrder: (payload) => dispatch(updateColumnOrder(payload)),
		updateColumns: (payload) => dispatch(updateColumns(payload)),
	};
};

export default connect(mapStateToProps, mapStateToDispatch)(BoardContent);
