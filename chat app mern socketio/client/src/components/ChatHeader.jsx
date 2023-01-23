import React from "react";
import UserProfile from "./UserProfile";

export default function ChatHeader({ username, userAvatar }) {
	return (
		<div className="chatHeader">
			<div className="chatHeader-img-container">
				<img
					src={`data:image/svg+xml;base64,${userAvatar}`}
					className="chatHeader-img"
				/>
			</div>
			<span className="chatHeader-username">{username}</span>
		</div>
	);
}
