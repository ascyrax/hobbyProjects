import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faGoogle,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
// fontawesome shit above

import { React, useState } from "react";
import axios from "axios";
import {
	getAvatar,
	getUserContactList,
	host,
	loginRoute,
} from "../../utils/APIRoutes";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useToast from "../hooks/useToast";

export default function Login({ toggleAuthState, page }) {
	let [state, setState] = useState({
		username: "",
		password: "",
	});

	let showHideStatus = "";
	if (page == "login") showHideStatus = "showLogin";

	const navigate = useNavigate();

	return (
		<>
			<ToastContainer />
			<div id={`login-toggler-${showHideStatus}`} className="login-toggler">
				<div className="login-toggler-top">
					<h1>Not logged in Yet?</h1>
					<button className="btn-toggler" onClick={handlePageToggle}>
						SIGN UP
					</button>
				</div>
				<div className="img-login-container">
					<img src="images/login.svg" className="img-login"></img>
				</div>
			</div>
			<div id={`login-${showHideStatus}`} className="login">
				<div className="login-main">
					<h1>Sign in</h1>
					<form className="form-login" onSubmit={handleSubmit}>
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

						<button type="submit" className="btn-login" onClick={handleSubmit}>
							SIGN IN
						</button>
					</form>
					<div className="div-links">
						<p className="mssg">Or login with social platforms</p>
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
		</>
	);
	function handlePageToggle() {
		toggleAuthState("register");
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
		if (state.password == "") {
			useToast("error", "🗝️ Password is required!");
			return false;
		}

		return true;
	}
	async function handleSubmit(e) {
		e.preventDefault();

		if (handleValidation()) {
			let payload = {
				username: state.username,
				password: state.password,
			};
			try {
				let serverRespone = await axios.post(loginRoute, payload);
				if (serverRespone.data.status == true) {
					useToast("success", "Login Successful");
					saveUserInLocalStorage(serverRespone.data.userAvatar);
				} else {
					useToast("error", "Login Unsuccessful");
				}
			} catch (e) {
				console.log("error", e);
			}
		}
	}
	function saveUserInLocalStorage(userAvatar) {
		console.log(state);
		localStorage.setItem("ascyChat-isLoggedIn", true);
		localStorage.setItem("ascyChat-username", state.username);
		if (userAvatar != "") {
			localStorage.setItem("ascyChat-userAvatar", userAvatar);
			localStorage.setItem("ascyChat-isAvatarSet", true);
		}
		navigate("/");
	}
}
