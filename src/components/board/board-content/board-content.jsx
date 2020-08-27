import React, { useState, useRef, useCallback } from "react";
import { connect } from "react-redux";
import "./board-content.css";
import BoardList from "./board-list/board-list";
import templateData2 from "../../../template-data2";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TextareaAutosize from "react-textarea-autosize";

function BoardContent() {
	const i = ["asdsad", "asdasd", "fsaffa", 3, 4, 5, 6, 7];
	const [data2, setData2] = useState(templateData2);
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);
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
			const newColumnOrder = Array.from(data2.columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newState = {
				...data2,
				columnOrder: newColumnOrder,
			};
			setData2(newState);
		}

		if (type === "task") {
			const start = data2.columns.find(
				(column) => column.id === source.droppableId
			);
			const finish = data2.columns.find(
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

				const newState = {
					...data2,
					columns: [
						...data2.columns.map((column) =>
							column.id === newColumn.id ? newColumn : column
						),
					],
				};
				setData2(newState);
				return;
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
			const newState = {
				...data2,
				columns: [
					...data2.columns.map((column) => {
						if (column.id === newStart.id) {
							return newStart;
						}
						if (column.id === newFinish.id) {
							return newFinish;
						}
						return column;
					}),
				],
			};
			setData2(newState);
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
	const textAreaRef2 = useCallback(
		(node) => {
			if (node) {
				document.addEventListener("click", clickListener);
				node.focus();
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
					<div className="add-list-textarea-container">
						<TextareaAutosize
							ref={textAreaRef2}
							className="add-list-textarea"
							placeholder="Geben Sie einen Titel für diese Liste ein ..."
							minRows={2}
						></TextareaAutosize>
					</div>
					<div className="add-list-btn-container">
						<button className="new-card-btn">
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
							{data2.columnOrder.map((columnId, index) => {
								const column = data2.columns.find(
									(column) => column.id === columnId
								);
								const tasks = column.taskIds
									.map((taskId) => {
										return [
											...data2.tasks.filter(
												(task) => task.id === taskId
											),
										];
									})
									.flat();

								return (
									<BoardList
										key={column.id}
										column={column}
										tasks={tasks}
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

export default connect(null, null)(BoardContent);
