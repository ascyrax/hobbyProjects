import {
	faArrowLeftLong,
	faCaretLeft,
	faHandPointLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { ChatContext } from "./Home";
import UserProfile from "./UserProfile";

export default function ChatHeader({ username, userAvatar }) {
	const { setChattingWith } = useContext(ChatContext);
	return (
		<div className="chatHeader">
			<div className="chatHeader-img-container">
				<img
					src={`data:image/svg+xml;base64,${userAvatar}`}
					className="chatHeader-img"
				/>
			</div>
			<span className="chatHeader-username">{username}</span>
			<div className="back-button-container">
				<button
					className="back-button"
					onClick={() => {
						setChattingWith("");
					}}
				>
					<FontAwesomeIcon icon={faArrowLeftLong} />
				</button>
			</div>
		</div>
	);
}
