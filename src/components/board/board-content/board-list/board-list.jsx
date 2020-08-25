import React, { useState, useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import "./board-list.css";
import TextareaAutosize from "react-textarea-autosize";

function BoardList() {
	const [visible, setVisible] = useState(false);
	const ref = useRef(null);
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
		if(visible) {
			document.removeEventListener("click", clickListener);
			setVisible(!visible)
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
		<div className="list-wrapper">
			<div className="list-cards">
				<div className="list-card-header">
					<h2>Open</h2>
					<div className="list-card-header-button">
						<i className="material-icons-outlined bl-16">
							more_horiz
						</i>
					</div>
				</div>
				<div className="cards-wrapper">
					<div className="list-card-details">
						<div>
							Aaaa Aasdasd asdas a fafsf qff qw f qf q fqff f
						</div>
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
							VECTOR® MD / MD3F são medidores monofásicos de
							energia elétrica, totalmente eletrônicos,
							desenvolvidos pela NANSEN S/A. O VECTOR® MD foi
							desenvolvido para medição de energia ativa (kWh) e o
							VECTOR® MD3F para medição de energia ativa (kWh)
							monofásica a 3 fios, alimentadas com transformadores
							com TAP central.
						</div>
					</div>
					{newCard(visible)}
				</div>
				{addCard(visible)}
			</div>
		</div>
	);
}

export default connect(null, null)(BoardList);
