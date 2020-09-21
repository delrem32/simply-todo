import React from "react";
import "./App.css";
import Header from "./header/header";
import Board from "./board/board";
import Auth from "./auth/auth";
import { connect } from "react-redux";

function App(props) {
	const { auth } = props;

	function authController(visibility) {
		console.log(visibility);
		if (visibility) {
			return (
				<div style={{height: "100%"}}>
					<Header />
					<Board />
				</div>
			);
			
		} else {
			return <Auth />;
		}
	}
	return <div className="App">{authController(auth)}</div>;
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};
export default connect(mapStateToProps)(App);
