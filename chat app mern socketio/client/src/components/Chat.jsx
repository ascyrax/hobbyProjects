import React, { useContext, useEffect, useState } from "react";
import Welcome from "./Welcome";
import { ChatContext } from "./Home";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import { io } from "socket.io-client";
export default function Chat() {
	const { username, userAvatar, chattingWith, chatUserAvatar } =
		useContext(ChatContext);
	const [socket, setSocket] = useState({});
	useEffect(() => {
		const socket = io("http://localhost:3000");
		if (socket) {
			socket.on("connect", () => {
				console.log("connected to the socket server with id = ", socket.id);
			});
			setSocket(socket);
		}
	}, []);

	return (
		<div className="chat">
			{chattingWith == "" && (
				<Welcome username={username} userAvatar={userAvatar} />
			)}
			{chattingWith != "" && (
				<>
					<ChatHeader username={chattingWith} userAvatar={chatUserAvatar} />
					<ChatBox socket={socket} />
					<ChatInput socket={socket} />
				</>
			)}
		</div>
	);
}
