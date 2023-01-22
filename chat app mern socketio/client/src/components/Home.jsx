import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Contacts from "./Contacts";
import Chat from "./Chat";

export default function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!checkForLoggedIn()) {
			navigate("/auth");
		} else if (!checkForAvatarSet()) navigate("/setAvatar");
	}, []);
	return (
		<div className="home">
			<Contacts />
			<Chat />
		</div>
	);
}

function checkForLoggedIn() {
	return localStorage.getItem("ascyChat-isLoggedIn") == "true";
}
function checkForAvatarSet() {
	return localStorage.getItem("ascyChat-isAvatarSet") == "true";
}
