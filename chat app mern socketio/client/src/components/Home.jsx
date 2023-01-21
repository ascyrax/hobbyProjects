import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!checkForLoggedIn()) {
			navigate("/auth");
		} else if (!checkForAvatarSet()) navigate("/setAvatar");
	}, []);
	return <div>Home</div>;
}

function checkForLoggedIn() {
	return localStorage.getItem("ascyChat-isLoggedIn") == "true";
}
function checkForAvatarSet() {
	return localStorage.getItem("ascyChat-isAvatarSet") == "true";
}
