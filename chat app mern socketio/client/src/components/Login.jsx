import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faGoogle,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Login({ toggleAuthState, page }) {
	let [state, setState] = useState({
		username: "",
		password: "",
	});

	let showHideStatus = "";
	if (page == "login") showHideStatus = "showLogin";

	return (
		<>
			<div className={`login-right ${showHideStatus}`}>
				<div className="login-right-top">
					<h1>Not logined Yet?</h1>
					<button className="btn-signIn" onClick={handlePageToggle}>
						SIGN UP
					</button>
				</div>
				<div className="login-right-bottom">
					<img src="images/login.svg" className="img-right-login"></img>
				</div>
			</div>
			<div className={`login ${showHideStatus}`}>
				<div className="login-left">
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
	function handleSubmit(e) {
		e.preventDefault();
	}
}
