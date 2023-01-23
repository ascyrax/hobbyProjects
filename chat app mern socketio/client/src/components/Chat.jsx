import React, { useState } from "react";
import Welcome from "./Welcome";

export default function Chat({ username, userAvatar }) {
	const [showWelcome, setShowWelcome] = useState(true);

	return (
		<div className="chat">
			{showWelcome && <Welcome username={username} userAvatar={userAvatar} />}
		</div>
	);
}
