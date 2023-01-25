import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import { getMssg } from "../../utils/APIRoutes";
import { ChatContext } from "./Home";

export default function ChatBox({ socket }) {
	const { username, chattingWith } = useContext(ChatContext);
	const [messages, setMessages] = useState([]);
	useEffect(() => {
		socket.on("server-broadcast", (obj) => {
			setMessages((prevMessages) => {
				return [
					...prevMessages,
					{ mssg: obj.mssg, to: username, from: chattingWith },
				];
			});
		});
	}, []);
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
				messages.map((message, index) => {
					let className = "";
					if (message.from == username) className = "message sent";
					else className = "message received";
					return (
						<div className={className} key={`${message.mssg}${index}`}>
							{message.mssg}
						</div>
					);
				})}
		</div>
	);
}
