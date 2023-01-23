import React from "react";
import Title from "./Title";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import UserProfile from "./UserProfile";

export default function Contacts({ username, userAvatar }) {
	return (
		<div className="contacts">
			<Title username={username} />
			<ContactList username={username} />
			<NewContact username={username} />
			<UserProfile userAvatar={userAvatar} username={username} />
		</div>
	);
}
