import React from "react";
import { connect } from "react-redux";
import "./header.css";
import { singOut } from "../../actions/actions";

function Header(props) {
	function singOut() {
		props.singOut();
	}
	return (
		<div className="container">
			<div className="header_background">
				<span className="wrapper">
					<div className="start_items">
						<button className="square_button">
							<i className="material-icons-outlined md-light md-20">
								apps_outlined
							</i>
						</button>
						<button className="square_button">
							<i className="material-icons-outlined md-light md-20">
								home_outlined
							</i>
						</button>
						<button className="square_button inline">
							<span className="material-icons-outlined md-light md-20">
								dashboard_outlined
							</span>
						</button>
						<button className="square_button">
							<i className="material-icons-outlined md-light md-20">
								search_outlined
							</i>
						</button>
					</div>
					<div className="end_items">
						<button className="square_button">
							<i className="material-icons-outlined md-light md-20">
								add
							</i>
						</button>
						<button className="square_button">
							<i className="material-icons-outlined md-light md-20">
								info_outlined
							</i>
						</button>
						<button className="square_button blau">
							<i className="material-icons-outlined md-light md-20">
								notifications_outlined
							</i>
						</button>
						<button className="circle_button" onClick={singOut}>
							<i className="material-icons-outlined md-light md-20">
								account_circle
							</i>
						</button>
					</div>
				</span>
			</div>
			<div className="logo_wrapper">
				<span className="logo"></span>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

const mapStateToDispatch = (dispatch) => {
	return {
		singOut: () => dispatch(singOut()),
	};
};

export default connect(mapStateToProps, mapStateToDispatch)(Header);
