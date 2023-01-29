import React from "react";
import { useState } from "react";
import axios from "axios";

export default function TwilioForm() {
	const [state, setState] = useState({
		text: "",
		recipient: "",
	});
	return (
		<div className="twilioForm">
			<form onSubmit={handleSubmit}>
				<label htmlFor="recepient">Recipient:</label>
				<input
					type="text"
					id="recepient"
					name="recipient"
					value={state.recipient}
					onChange={handleChange}
				/>
				<label htmlFor="text">Text:</label>
				<textarea
					name="text"
					id="text"
					cols="30"
					rows="10"
					value={state.text}
					onChange={handleChange}
				></textarea>
				<button type="submit">SEND</button>
			</form>
		</div>
	);
	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		// console.log(name, value);
		setState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	}
	async function handleSubmit(e) {
		e.preventDefault();
		const payload = {
			text: state.text,
			recipient: state.recipient,
		};
		// console.log(payload);
		try {
			const serverResponse = await axios.post(
				"http://localhost:4000/api/sendText",
				payload
			);
			if (serverResponse.data.status == true) {
				console.log(serverResponse.data.mssg);
				setState({ text: "", recipient: "" });
			} else {
				console.log(serverResponse.data.mssg);
			}
		} catch (e) {
			console.log("ERROR SENDING MESSAGE", e);
		}
	}
}
