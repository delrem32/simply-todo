import React from "react";
import { connect } from "react-redux";
import "./board-content.css";
import BoardList from "./board-list/board-list";

function BoardContent() {
	return (
		<div className="board-content-wrapper">
			<div className="board-content">
				<div className="board-list">
					<BoardList />
				</div>
				<div className="board-list">
					<BoardList />
				</div>
				<div className="board-list">
					<BoardList />
				</div>
				<div className="board-list">
					<BoardList />
				</div>
				<div className="board-list">
					<BoardList />
				</div>
				<div className="board-list">
					<BoardList />
				</div>
				<button className="board-new-list-btn">
					<div>
						<i className="material-icons-outlined md-light vl-16">add</i>
					</div>
					<div className="new-list-text">
						Eine weitere Liste hinzufügen
					</div>
				</button>
			</div>
		</div>
	);
}

export default connect(null, null)(BoardContent);
