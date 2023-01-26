import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ChatContext } from "./Home";
export default function Contact({ username, avatar }) {
	const { chattingWith, setChattingWith } = useContext(ChatContext);
	const [selected, setSelected] = useState(false);
	useEffect(() => {
		setSelected(chattingWith == username ? true : false);
	}, [chattingWith]);

	return (
		<div
			className={`contact ${selected ? "selected" : ""}`}
			onClick={(e) => setChattingWith(username)}
		>
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
