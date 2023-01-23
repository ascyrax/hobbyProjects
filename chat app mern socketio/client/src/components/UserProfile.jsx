import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
export default function UserProfile({ username, userAvatar }) {
	const navigate = useNavigate();
	return (
		<div className="userProfile">
			<div className="userProfile-img-container">
				<img
					src={`data:image/svg+xml;base64,${userAvatar}`}
					className="UserProfile-img"
				/>
			</div>
			<span className="userProfile-username">{username}</span>
			<div className="logout" onClick={handleLogout}>
				<FontAwesomeIcon
					icon={faArrowRightFromBracket}
					className="logout-icon"
				/>
			</div>
		</div>
	);
	function handleLogout() {
		localStorage.removeItem("ascyChat-isAvatarSet");
		localStorage.removeItem("ascyChat-userAvatar");
		localStorage.removeItem("ascyChat-isLoggedIn");
		localStorage.removeItem("ascyChat-username");
		localStorage.removeItem("ascyChat-avatarReloadCnt");
		navigate("/auth");
	}
}
