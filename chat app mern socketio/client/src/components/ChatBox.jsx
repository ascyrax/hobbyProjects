import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { getMssg } from "../../utils/APIRoutes";
import { ChatContext } from "./Home";

export default function ChatBox() {
	const { username, chattingWith } = useContext(ChatContext);
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		async function temp() {
			try {
				const from = username,
					to = chattingWith;
				const usersInvolved = [from, to];
				usersInvolved.sort();
				const payload = {
					usersInvolved,
					from,
					to,
				};
				const serverResponse = await axios.post(getMssg, payload);
				if (serverResponse.data.status == true) {
					setMessages(serverResponse.data.messages);
				}
			} catch (e) {
				console.log("error", e);
			}
		}
		temp();
	}, [chattingWith]);
	return (
		<div className="chatBox">
			{messages &&
				messages.map((message) => {
					let className = "";
					if (message.from == username) className = "message sent";
					else className = "message received";
					return <div className={className}>{message.mssg}</div>;
				})}
		</div>
	);
}
