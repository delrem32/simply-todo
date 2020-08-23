import React from "react";
import { connect } from "react-redux";
import "./board-content.css";
import BoardList from "./board-list/board-list";

function BoardContent() {
	return (
		<div className="board-content">
			<div className="board-list">
                <div className="board-list-header">
                </div>
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
		</div>
	);
}

export default connect(null, null)(BoardContent);
