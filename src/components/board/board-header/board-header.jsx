import React from "react";
import { connect } from "react-redux";
import "./board-header.css";

function BoardHeader() {
	return (
		<div className="board-header">
			<div className="items-start">
				<button className="btn-text board-header-name">
					<div>name</div>
				</button>
				<button className="square-button">
					<i className="material-icons-outlined vl-20 vl-light">
						star_border
					</i>
				</button>
				<div className="divider"></div>
				<button className="btn-text">Privat</button>
				<div className="divider"></div>
				<button className="btn-text">
					<div>
						<i className="material-icons-outlined md-light vl-16">
							lock
						</i>
					</div>
					<div className="inbutton-text">Privat</div>
				</button>
				<div className="divider"></div>
				<button className="circle_button">
					<i className="material-icons-outlined md-light md-20">
						account_circle
					</i>
				</button>
				<button className="btn-text">Einladen</button>
			</div>
			<div className="items-end">
				<button className="btn-text">
					<div>
						<i className="material-icons-outlined md-light vl-16">
							room_service
						</i>
					</div>
					<div className="inbutton-text">Butler</div>
				</button>
				<button className="btn-text">
					<div>
						<i className="material-icons-outlined md-light vl-16">
							more_horiz
						</i>
					</div>
					<div className="inbutton-text">Menu anzeigen</div>
				</button>
			</div>
		</div>
	);
}

export default connect(null, null)(BoardHeader);
