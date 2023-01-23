import React, { useState, useContext } from "react";
import Welcome from "./Welcome";
import { ChatContext } from "./Home";
import ChatHeader from "./ChatHeader";
import ChatBox from "./ChatBox";
import ChatInput from "./ChatInput";
export default function Chat() {
	const { username, userAvatar, chattingWith, chatUserAvatar } =
		useContext(ChatContext);

	return (
		<div className="chat">
			{chattingWith == "" && (
				<Welcome username={username} userAvatar={userAvatar} />
			)}
			{chattingWith != "" && (
				<>
					<ChatHeader username={chattingWith} userAvatar={chatUserAvatar} />
					<ChatBox />
					<ChatInput />
				</>
			)}
		</div>
	);
}
