import React, { useContext, useState, useEffect } from "react";
import Title from "./Title";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import UserProfile from "./UserProfile";
import { ChatContext } from "./Home";
export default function Contacts() {
	const [contacts, setContacts] = useState([]);
	const { username, userAvatar, chattingWith } = useContext(ChatContext);
	const [showOrHide, setShowOrHide] = useState(
		chattingWith == "" ? "show" : "hide"
	);
	useEffect(() => {
		setShowOrHide(chattingWith == "" ? "show" : "hide");
	}, [chattingWith]);

	return (
		<div className="contacts" id={`contacts-${showOrHide}`}>
			<Title username={username} />
			<ContactList
				username={username}
				contacts={contacts}
				setContacts={setContacts}
			/>
			<NewContact
				username={username}
				contacts={contacts}
				setContacts={setContacts}
			/>
			<UserProfile userAvatar={userAvatar} username={username} />
		</div>
	);
}
