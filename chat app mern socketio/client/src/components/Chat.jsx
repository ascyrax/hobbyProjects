import React, { useContext, useEffect, useState } from "react";
import Welcome from "./Welcome";
import { ChatContext } from "./Home";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
import { io } from "socket.io-client";
import { hostSocketAddress } from "../../utils/APIRoutes";
export default function Chat() {
	const { username, userAvatar, chattingWith, chatUserAvatar } =
		useContext(ChatContext);
	const [currentChat, setCurrentChat] = useState(chattingWith);
	const [socket, setSocket] = useState({});
	const [showOrHide, setShowOrHide] = useState(
		chattingWith == "" ? "hide" : "show"
	);
	useEffect(() => {
		setShowOrHide(chattingWith == "" ? "hide" : "show");
		setCurrentChat(chattingWith);
	}, [chattingWith]);
	useEffect(() => {
		const socket = io(hostSocketAddress);
		if (socket) {
			socket.on("connect", () => {
				console.log("connected to the socket server with id = ", socket.id);
			});
			setSocket(socket);
		}
	}, []);

	return (
		<div className="chat" id={`chat-${showOrHide}`}>
			{currentChat == "" && (
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
