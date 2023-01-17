import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import {
	faFacebook,
	faTwitter,
	faGoogle,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Register() {
	return (
		<div className="register">
			<div className="left">
				<h1>Sign up</h1>
				<form className="form-register">
					<div className="input-field">
						<FontAwesomeIcon icon={faUser} />
						<input
							type="text"
							name="username"
							id="username"
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
			<div className="right">
				<div className="right-top">
					<h1>Already Registered?</h1>
					<button className="btn-signIn">SIGN IN</button>
				</div>
				<div className="right-bottom"></div>
			</div>
		</div>
	);
}
