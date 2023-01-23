import React from "react";
import Title from "./Title";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import UserProfile from "./UserProfile";
import { useContext } from "react";
import { ChatContext } from "./Home";
export default function Contacts() {
	const { username, userAvatar } = useContext(ChatContext);
	return (
		<div className="contacts">
			<Title username={username} />
			<ContactList username={username} />
			<NewContact username={username} />
			<UserProfile userAvatar={userAvatar} username={username} />
		</div>
	);
}
