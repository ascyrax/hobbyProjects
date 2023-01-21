import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!checkForLoggedIn()) navigate("/auth");
		if (!checkForAvatarSet()) navigate("/setAvatar");
	}, []);
	return <div>Home</div>;
}

function checkForLoggedIn() {
	return localStorage.getItem("ascyChat-isLoggedIn") == "true";
}
function checkForAvatarSet() {
	console.log(localStorage.getItem("ascyChat-isAvatarSet"));
	return localStorage.getItem("ascyChat-isAvatarSet") == "true";
}
