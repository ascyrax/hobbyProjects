import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

import React, { useContext, useState } from "react";
import EmojiPicker from "emoji-picker-react";

import { ChatContext } from "./Home";

import { addMssg } from "../../utils/APIRoutes";

import axios from "axios";

export default function ChatInput({ socket }) {
	const [chatInput, setChatInput] = useState("");
	const [pickEmoji, setPickEmoji] = useState(false);
	const { username, userAvatar, chattingWith, chatUserAvatar } =
		useContext(ChatContext);
	return (
		<div className="chatInput">
			<div className={`emoji-picker-container ${pickEmoji && "show"}`}>
				<EmojiPicker
					height={"100%"}
					width={"100%"}
					onEmojiClick={handleEmojiInsert}
				/>
			</div>
			<div className="div-emoji">
				<FontAwesomeIcon
					icon={faSmile}
					className="emoji"
					onClick={handleEmojiPick}
				/>
			</div>
			<div className="input-field">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="username"
						id="username"
						className="input"
						value={chatInput}
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	);
	function handleChange(e) {
		const value = e.target.value;
		setChatInput(value);
	}
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			socket.emit("text", {
				mssg: chatInput,
				from: username,
				to: chattingWith,
			});
			const payload = {
				mssg: chatInput,
				from: username,
				to: chattingWith,
			};
			const serverResponse = await axios.post(addMssg, payload);
			if (serverResponse.data.status == true) {
				setChatInput("");
			}
		} catch (e) {
			console.log("error", e);
		}
	}
	function handleEmojiPick() {
		setPickEmoji((prev) => !prev);
	}
	function handleEmojiInsert(emoji) {
		setChatInput((prevInput) => prevInput + emoji.emoji);
	}
}
