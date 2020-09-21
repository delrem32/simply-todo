import React from "react";
import { connect } from "react-redux";
import "./auth.css";
import { singIn, singOut, register } from "../../actions/actions";
import { useRef } from "react";

function Auth(props) {
	const { singIn, register} = props;
	
	const loginRef = useRef(null);
	const passRef = useRef(null);

	function submitForm(event) {
		event.preventDefault();
		//AuthService.login(event.target.email.value, event.target.password.value)
		//.then((dispatch) => dispatch);
		singIn(event.target.email.value, event.target.password.value);
	}

	function registerForm() {
		register(loginRef.current.value, passRef.current.value);
	}
	return (
		<div className="auth-screen">
			<form className="auth-form-container" onSubmit={submitForm}>
				<span className="form-input-logo"></span>
				<div className="form-input-wrapper">
					<input
						className="form-input"
						name="email"
						type="email"
						placeholder="example@example.com"
						ref={loginRef}
					/>
					<input
						className="form-input"
						name="password"
						type="password"
						placeholder="Enter your password..."
						ref={passRef}
					/>
				</div>
				<div>
					<button className="auth_button">Sing In</button>
					<p style={{ fontSize: "14px" }}>or</p>
					<span className="auth_register" onClick={registerForm}>
						Register
					</span>
				</div>
			</form>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};
const mapStateToDispatch = (dispatch) => {
	return {
		singIn: (email, password) => dispatch(singIn(email, password)),
		singOut: () => dispatch(singOut()),
		register: (email, password) => dispatch(register(email, password)),
	};
};

export default connect(mapStateToProps, mapStateToDispatch)(Auth);
