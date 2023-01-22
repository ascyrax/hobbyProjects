import React from "react";
import Title from "./Title";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import UserProfile from "./UserProfile";
import { useState } from "react";
import { useEffect } from "react";

export default function Contacts() {
	const [username, setUsername] = useState("");
	const [userAvatar, setUserAvatar] = useState("");
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
		<div className="contacts">
			<Title username={username} />
			<ContactList username={username} />
			<NewContact username={username} />
			<UserProfile userAvatar={userAvatar} username={username} />
		</div>
	);
}
