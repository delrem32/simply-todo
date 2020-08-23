import React from "react";
import { connect } from "react-redux";
import "./board-list.css";

function BoardList() {
	return (
		<div className="list-cards">
			<div className="list-card-header">
				<h2>Open</h2>
				<div className="list-card-header-button">
					<i className="material-icons-outlined bl-16">more_horiz</i>
				</div>
			</div>
			<div className="cards-wrapper">
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
                <div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
                <div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
				<div className="list-card-details"></div>
			</div>
		</div>
	);
}

export default connect(null, null)(BoardList);
