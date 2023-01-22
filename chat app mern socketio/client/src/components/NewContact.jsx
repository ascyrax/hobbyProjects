import React from "react";
import { useState } from "react";
import axios from "axios";
import { getUser } from "../../utils/APIRoutes";

export default function NewContact({ username }) {
	const [usernameToFind, setUsernameToFind] = useState("");
	const [mode, setMode] = useState("normal"); // 'find' mode => need to enter a username

	return (
		<div className="newContact">
			{mode == "find" ? (
				<div className="div-find">
					<form onSubmit={findUser}>
						<input
							type="text"
							value={usernameToFind}
							onChange={handleChange}
							name="usernameToFind"
						/>
					</form>
				</div>
			) : (
				<div
					className="div-normal"
					onClick={(e) => {
						changeMode();
					}}
				>
					<span className="newContactPlus">+</span>
					<span className="newContactText">NewContact</span>
				</div>
			)}
		</div>
	);

	function changeMode() {
		setMode((prevMode) => (prevMode == "normal" ? "find" : "normal"));
	}
	async function findUser(e) {
		e.preventDefault();
		const serverResponse = await axios.post(getUser, {
			username,
			usernameToFind,
		});
	}
	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setUsernameToFind(value);
	}
}
