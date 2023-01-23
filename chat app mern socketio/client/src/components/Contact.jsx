import React from "react";

export default function Contact({ username, avatar }) {
	return (
		<div className="contact">
			<div className="contact-img-container">
				<img
					src={`data:image/svg+xml;base64,${avatar}`}
					className="contact-img"
				/>
			</div>
			<div className="contact-username">{username}</div>
		</div>
	);
}
