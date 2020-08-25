import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./board-content.css";
import BoardList from "./board-list/board-list";

function BoardContent() {
	const i = ["asdsad","asdasd","fsaffa"];

	

	return (
		<div className="board-content-wrapper">
			
				{i.map((number) => (
					<div className="board-content">
						<BoardList  key={number}/>
					</div>
				))}
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
		
	);
}

export default connect(null, null)(BoardContent);
