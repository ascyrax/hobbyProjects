import React from "react";
import { useState } from "react";
import axios from "axios";
import { findUser } from "../../utils/APIRoutes";
import useToast from "../hooks/useToast";
import { ToastContainer } from "react-toastify";

export default function NewContact({ username, contacts, setContacts }) {
	const [usernameToFind, setUsernameToFind] = useState("");
	const [mode, setMode] = useState("normal"); // 'find' mode => need to enter a username

	return (
		<div className="newContact">
			<ToastContainer />
			{mode == "find" ? (
				<div className="div-find">
					<form onSubmit={handleUserFind}>
						<input
							type="text"
							value={usernameToFind}
							onChange={handleChange}
							name="usernameToFind"
							placeholder="username"
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
	async function handleUserFind(e) {
		e.preventDefault();
		const serverResponse = await axios.post(findUser, {
			username,
			usernameToFind,
		});
		console.log(serverResponse.data);
		if (serverResponse.data.status == true) {
			useToast("success", serverResponse.data.mssg);
			setContacts(serverResponse.data.contactList);
		} else {
			useToast("error", serverResponse.data.mssg);
		}
		console.log(serverResponse.data);
		changeMode();
		setUsernameToFind("");
	}
	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setUsernameToFind(value);
	}
}
