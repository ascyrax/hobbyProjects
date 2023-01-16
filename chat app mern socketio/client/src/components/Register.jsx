import React from "react";

export default function Register() {
	return (
		<div className="register">
			<h1>Register here</h1>
			<form className="form-register">
				<input
					type="text"
					name="username"
					id="username"
					placeholder="username"
				/>
				<input type="text" name="email" id="email" />
				<input type="text" name="password" id="password" />
				<input type="text" name="password2" id="password2" />
				<button type="submit">register</button>
			</form>
		</div>
	);
}
