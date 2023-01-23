import React from "react";
import welcome01 from "../images/welcome01.gif";

export default function Welcome({ username, userAvatar }) {
	return (
		<div className="welcome">
			<img src={welcome01} className="welcome-img" />
			<div className="welcome-text">
				<div>
					<span>Welcome, </span>
					<span className="welcome-username">{username}</span>
				</div>
				<p>Select a chat to start messaging</p>
			</div>
		</div>
	);
}
