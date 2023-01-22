import React from "react";

export default function UserProfile({ username, userAvatar }) {
	return (
		<div className="userProfile">
			<div className="userProfile-img-container">
				<img
					src={`data:image/svg+xml;base64,${userAvatar}`}
					className="UserProfile-img"
				/>
			</div>
			<span className="userProfile-username">{username}</span>
		</div>
	);
}
