import React, { useState, useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import "./board-list.css";
import TextareaAutosize from "react-textarea-autosize";
import { Droppable, Draggable } from "react-beautiful-dnd";

function BoardList(props) {
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);
	const tasksList = props.tasks;
	const clickListener = useCallback(
		(e) => {
			if (ref.current) {
				if (!ref.current.contains(e.target)) {
					document.removeEventListener("click", clickListener);
					setVisible(false);
				}
			}
		},
		[ref.current]
	);
	const textAreaRef = useCallback((node) => {
		if (node) {
			document.addEventListener("click", clickListener);
			node.focus();
		}
	});
	function handleVisibility() {
		if (visible) {
			document.removeEventListener("click", clickListener);
			setVisible(!visible);
		}
		setVisible(!visible);
	}
	function newCard(visible) {
		if (visible) {
			return (
				<div ref={ref}>
					<div className="list-card-details">
						<TextareaAutosize
							ref={textAreaRef}
							className="list-card-new"
							placeholder="Geben Sie einen Titel für diese Karte ein ..."
							minRows={2}
						/>
					</div>
					<div className="new-card-btn-container">
						<button className="new-card-btn">
							Karte hinzufügen
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
	function addCard(visible) {
		if (!visible) {
			return (
				<div className="list-cards-footer">
					<div>
						<button
							className="open-new-card"
							onClick={handleVisibility}
						>
							<i className="material-icons-outlined bl-20">add</i>
							<span className="open-card-text">
								Eine weitere Karte hinzufügen
							</span>
						</button>
					</div>
					<div className="open-template">
						<button className="open-template-button">
							<i className="material-icons-outlined bl-20">
								view_quilt
							</i>
						</button>
					</div>
				</div>
			);
		}
	}
	return (
		<Draggable draggableId={props.column.id} index={props.index}>
			{(provided) => (
				<div
					className="list-wrapper"
					{...provided.draggableProps}
					ref={provided.innerRef}
				>
					<div className="list-cards">
						<div className="list-card-header" {...provided.dragHandleProps}>
							<h2>{props.column.title}</h2>
							<div className="list-card-header-button">
								<i className="material-icons-outlined bl-16">
									more_horiz
								</i>
							</div>
						</div>
						<div className="cards-wrapper">
							<Droppable droppableId={props.column.id} type="task">
								{(provided) => (
									<div
										className="droppable-container"
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										{tasksList.map((task, index) => (
											<Draggable
												draggableId={task.id}
												index={index}
												key={task.id}
											>
												{(provided) => (
													<div
														className="list-card-details"
														{...provided.draggableProps}
														{...provided.dragHandleProps}
														ref={provided.innerRef}
													>
														<a
															className="divLink"
															href="#"
														>
															<div>
																{task.content}
															</div>
														</a>
													</div>
												)}
											</Draggable>
										))}
										{provided.placeholder}
									</div>
								)}
							</Droppable>
							{newCard(visible)}
						</div>
						{addCard(visible)}
					</div>
				</div>
			)}
		</Draggable>
	);
}

export default connect()(BoardList);
