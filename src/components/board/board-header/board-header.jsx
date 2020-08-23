import React from "react";
import { connect } from "react-redux";
import "./board-header.css";

function BoardHeader() {
	return (
		<div className="board-header">
			<div className="items-start">
				<div className="header-button"></div>
				<div className="header-button"></div>
				<div className="header-button"></div>
				<div className="header-button"></div>
                <div className="header-button"></div>
				<div className="header-button"></div>
			</div>
			<div className="items-end">
				<div className="header-button"></div>
				<div className="header-button"></div>
			</div>
		</div>
	);
}

export default connect(null, null)(BoardHeader);
