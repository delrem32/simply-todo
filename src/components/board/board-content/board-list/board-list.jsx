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
				<div className="list-card-details">
					<div>Aaaa Aasdasd asdas a fafsf qff qw f qf q fqff f</div>
				</div>
				<div className="list-card-details">
					<div>Bonés de beisebol de hip hop personalizado</div>
				</div>
				<div className="list-card-details">
					<div>impresso men stellar lumen s (xlm) para a lua</div>
				</div>
				<div className="list-card-details">
					<div>Bonés de beisebol de hip</div>
				</div>
				<div className="list-card-details">
					<div>lilavave criou um design</div>
				</div>
				<div className="list-card-details">
					<div>
						GU10 LED Light Bulb Downlight Lamp 3000K Warm White
						Bulbs.
					</div>
				</div>
				<div className="list-card-details">
					<div>seu cachorro é o seu</div>
				</div>
				<div className="list-card-details">
					<div>
						VECTOR® MD / MD3F são medidores monofásicos de energia
						elétrica, totalmente eletrônicos, desenvolvidos pela
						NANSEN S/A. O VECTOR® MD foi desenvolvido para medição
						de energia ativa (kWh) e o VECTOR® MD3F para medição de
						energia ativa (kWh) monofásica a 3 fios, alimentadas com
						transformadores com TAP central.
					</div>
				</div>
			</div>
			<div className="list-cards-footer">
				<div>
				<a className="open-new-card">
					<i className="material-icons-outlined bl-20">add</i>
					<span className="open-card-text">Eine weitere Karte hinzufügen</span>
				</a>
				</div>
				<div className="open-template">
					<button className="open-template-button">
						<i className="material-icons-outlined bl-20">
							view_quilt
						</i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default connect(null, null)(BoardList);
