import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Contacts from "./Contacts";
import Chat from "./Chat";
import axios from "axios";

export const ChatContext = React.createContext();
import { getAvatar } from "../../utils/APIRoutes";
export default function Home() {
	const [username, setUsername] = useState("");
	const [userAvatar, setUserAvatar] = useState("");
	const [chattingWith, setChattingWith] = useState("");
	const [chatUserAvatar, setChatUserAvatar] = useState("");
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
	useEffect(() => {
		async function getChatUserAvatar() {
			try {
				const serverResponse = await axios.post(getAvatar, {
					username: chattingWith,
				});
				if (serverResponse.data.status == true)
					setChatUserAvatar(serverResponse.data.userAvatar);
			} catch (e) {
				console.log("error", e);
			}
		}
		getChatUserAvatar();
	}, [chattingWith]);

	return (
		<ChatContext.Provider
			value={{
				chattingWith,
				setChattingWith,
				userAvatar,
				setUserAvatar,
				username,
				setUsername,
				chatUserAvatar,
				setChatUserAvatar,
			}}
		>
			<div className="home">
				<Contacts />
				<Chat />
			</div>
		</ChatContext.Provider>
	);
}

function checkForLoggedIn() {
	return localStorage.getItem("ascyChat-isLoggedIn") == "true";
}
function checkForAvatarSet() {
	return localStorage.getItem("ascyChat-isAvatarSet") == "true";
}
