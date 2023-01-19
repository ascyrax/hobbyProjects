import React from "react";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

export default function Auth() {
	let [state, setState] = useState({ page: "register" });
	// page: register/login
	function toggleAuthState(newState) {
		setState((prevState) => {
			return { ...prevState, page: newState };
		});
	}
	console.log(state.page);
	return (
		<div className={`auth auth-${state.page}`}>
			<Register page={state.page} toggleAuthState={toggleAuthState} />
			<Login page={state.page} toggleAuthState={toggleAuthState} />
			<button
				style={{
					position: "absolute",
					top: "90vh",
					left: "50vw",
					cursor: "pointer",
				}}
				onClick={() => {
					state.page == "register"
						? toggleAuthState("login")
						: toggleAuthState("register");
				}}
			>
				toggle
			</button>
		</div>
	);
}
