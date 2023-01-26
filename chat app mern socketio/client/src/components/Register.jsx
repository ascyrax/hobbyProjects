import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faGoogle,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerRoute } from "../../utils/APIRoutes";

import { ToastContainer } from "react-toastify";
import useToast from "../hooks/useToast";

export default function Register({ toggleAuthState, page }) {
	let [state, setState] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});
	let navigate = useNavigate();

	let showHideStatus = "";
	if (page == "register") showHideStatus = "showRegister";

	return (
		<>
			<ToastContainer />
			<div id={`register-${showHideStatus}`} className="register">
				<div className="register-main">
					<h1>Sign up</h1>
					<form className="form-register" onSubmit={handleSubmit}>
						<div className="input-field">
							<FontAwesomeIcon icon={faUser} />
							<input
								type="text"
								name="username"
								id="username"
								value={state.username}
								onChange={handleInputChange}
								placeholder="Username"
								className="input"
							/>
						</div>
						<div className="input-field">
							<FontAwesomeIcon icon={faEnvelope} />
							<input
								type="text"
								name="email"
								id="email"
								value={state.email}
								onChange={handleInputChange}
								placeholder="Email"
								className="input"
							/>
						</div>
						<div className="input-field">
							<FontAwesomeIcon icon={faKey} />
							<input
								type="text"
								name="password"
								id="password"
								value={state.password}
								onChange={handleInputChange}
								placeholder="Password"
								className="input"
							/>
						</div>
						<div className="input-field">
							<FontAwesomeIcon icon={faKey} />
							<input
								type="text"
								name="password2"
								id="password2"
								value={state.password2}
								onChange={handleInputChange}
								placeholder="Password"
								className="input"
							/>
						</div>
						<button type="submit" className="btn-register">
							REGISTER
						</button>
					</form>
					<div className="div-links">
						<p className="mssg">Or Register with social platforms</p>
						<div className="links">
							<a href="#" className="link fb">
								<FontAwesomeIcon icon={faFacebook} />
							</a>
							<a href="#" className="link twitter">
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a href="#" className="link google">
								<FontAwesomeIcon icon={faGoogle} />
							</a>
							<a href="#" className="link linkedin">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div
				id={`register-toggler-${showHideStatus}`}
				className="register-toggler"
			>
				<div className="register-toggler-top">
					<h1>Already Registered?</h1>
					<button className="btn-toggler" onClick={handlePageToggle}>
						SIGN IN
					</button>
				</div>
				<div className="img-register-container">
					<img src="images/register.svg" className="img-register"></img>
				</div>
			</div>
		</>
	);

	function handlePageToggle() {
		toggleAuthState("login");
	}
	function handleInputChange(e) {
		let { name, value } = e.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	}

	function handleValidation() {
		if (state.username == "") {
			useToast("error", "👤 Username is required!");
			return false;
		}
		if (state.email == "") {
			useToast("error", "📧 email is required");
			return false;
		}
		if (state.password != state.password2) {
			useToast("error", "🔑 passwords must match");
			return false;
		}
		if (state.password.length < 8) {
			useToast("error", "🔑 password must be atleast 8 chars long");
			return false;
		}
		return true;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (handleValidation()) {
			let payload = {
				username: state.username,
				email: state.email,
				password: state.password,
				password2: state.password2,
			};
			try {
				let serverRespone = await axios.post(registerRoute, payload);
				console.log(serverRespone.data);
				if (serverRespone.data.status == true) {
					useToast("success", "User Registered");
					saveUserInLocalStorage();
				} else {
					useToast("error", serverRespone.data.mssg);
				}
			} catch (e) {
				console.log("error", e);
			}
		}
	}

	function saveUserInLocalStorage() {
		localStorage.setItem("ascyChat-isLoggedIn", true);
		localStorage.setItem("ascyChat-username", state.username);
		navigate("/");
	}
}
