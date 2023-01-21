import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faGoogle,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { registerRoute } from "../../utils/APIRoutes";

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
			<div className={`register ${showHideStatus}`}>
				<div className="register-left">
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
			<div className={`register-right ${showHideStatus}`}>
				<div className="register-right-top">
					<h1>Already Registered?</h1>
					<button className="btn-signIn" onClick={handlePageToggle}>
						SIGN IN
					</button>
				</div>
				<div className="register-right-bottom">
					<img src="images/register.svg" className="img-right-register"></img>
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
					saveUserInLocalStorage();
				}
			} catch (e) {
				console.log("error", e);
			}
		} else {
		}
	}

	function saveUserInLocalStorage() {
		localStorage.setItem("ascyChat-isLoggedIn", true);
		localStorage.setItem("ascyChat-username", state.username);
		console.log(localStorage);
		navigate("/");
	}
}
