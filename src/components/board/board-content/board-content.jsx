import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./board-content.css";
import BoardList from "./board-list/board-list";
import templateData from "../../../template-data";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function BoardContent() {
	const i = ["asdsad", "asdasd", "fsaffa", 3, 4, 5, 6, 7];
	const [data, setData] = useState(templateData);
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
			const newColumnOrder = Array.from(data.columnOrder);
			newColumnOrder.splice(source.index, 1);
			newColumnOrder.splice(destination.index, 0, draggableId);

			const newState = {
				...data,
				columnOrder: newColumnOrder,
			};
			setData(newState);
		}

		if (type === "task") {
			const start = data.columns[source.droppableId];
			const finish = data.columns[destination.droppableId];

			if (start === finish) {
				const newTaskIds = Array.from(start.taskIds);
				newTaskIds.splice(source.index, 1);
				newTaskIds.splice(destination.index, 0, draggableId);

				const newColumn = {
					...start,
					taskIds: newTaskIds,
				};

				const newState = {
					...data,
					columns: {
						...data.columns,
						[newColumn.id]: newColumn,
					},
				};
				setData(newState);
				return;
			}

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
				...data,
				columns: {
					...data.columns,
					[newStart.id]: newStart,
					[newFinish.id]: newFinish,
				},
			};
			setData(newState);
		}
	};
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
							{data.columnOrder.map((columnId, index) => {
								const column = data.columns[columnId];
								const tasks = column.taskIds.map(
									(taskId) => data.tasks[taskId]
								);

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
					<button className="board-new-list-btn">
						<div>
							<i className="material-icons-outlined md-light vl-16">
								add
							</i>
						</div>
						<div className="new-list-text">
							Eine weitere Liste hinzufügen
						</div>
					</button>
				</div>
			</div>
		</DragDropContext>
	);
}

export default connect(null, null)(BoardContent);
