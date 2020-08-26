import React from "react";
import { connect } from "react-redux";
import "./board.css";
import BoardHeader from "./board-header/board-header";
import BoardContent from "./board-content/board-content";

function Board() {
	return (
		<div className="board-flex-wrapper">
			<BoardHeader />
			<BoardContent />
		</div>
	);
}

export default connect(null, null)(Board);
