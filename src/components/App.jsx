import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./header/header";
import Board from "./board/board";
import Auth from "./auth/auth";
import { connect } from "react-redux";
import { singOut } from "../actions/actions";

function App(props) {
	const { auth } = props;
	const [visib, setVisib] = useState(false);
	useEffect(() => {
		setVisib(auth);
	}, [auth])
	
	function authController(visibility) {
		console.log(visibility);
		if (visibility) {
			return (
				<div style={{ height: "100%" }}>
					<Header />
					<Board />
				</div>
			);
		} else {
			return <Auth />;
		}
	}
	return <div className="App">{authController(visib)}</div>;
}
const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		singOut: () => dispatch(singOut()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
