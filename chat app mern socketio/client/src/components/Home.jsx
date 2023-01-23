import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contacts from "./Contacts";
import Chat from "./Chat";

export default function Home() {
	const [username, setUsername] = useState("");
	const [userAvatar, setUserAvatar] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		if (!checkForLoggedIn()) {
			navigate("/auth");
		} else if (!checkForAvatarSet()) navigate("/setAvatar");
	}, []);
	useEffect(() => {
		const tempUsername = localStorage.getItem("ascyChat-username");
		if (tempUsername) {
			setUsername(tempUsername);
		}

		const tempAvatar = localStorage.getItem("ascyChat-userAvatar");
		if (tempAvatar) {
			setUserAvatar(tempAvatar);
		}
	}, []);

	return (
		<div className="home">
			<Contacts username={username} userAvatar={userAvatar} />
			<Chat username={username} userAvatar={userAvatar} />
		</div>
	);
}

function checkForLoggedIn() {
	return localStorage.getItem("ascyChat-isLoggedIn") == "true";
}
function checkForAvatarSet() {
	return localStorage.getItem("ascyChat-isAvatarSet") == "true";
}
