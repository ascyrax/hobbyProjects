import React from "react";
import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

export default function Auth() {
	const [state, setState] = useState({ page: "register" });

	const navigate = useNavigate();

	useEffect(() => {
		if (checkForLoggedIn()) navigate("/");
	}, []);

	// page: register/login
	function toggleAuthState(newState) {
		setState((prevState) => {
			return { ...prevState, page: newState };
		});
	}
	return (
		<div className={`auth auth-${state.page}`}>
			<Register page={state.page} toggleAuthState={toggleAuthState} />
			<Login page={state.page} toggleAuthState={toggleAuthState} />
			{/* <button
				style={{
					position: "absolute",
					top: "90vh",
					left: "50vw",
					cursor: "pointer",
					zIndex: "10",
				}}
				onClick={() => {
					state.page == "register"
						? toggleAuthState("login")
						: toggleAuthState("register");
				}}
			>
				toggle
			</button> */}
		</div>
	);
}

function checkForLoggedIn() {
	return localStorage.getItem("ascyChat-isLoggedIn") == "true";
}
