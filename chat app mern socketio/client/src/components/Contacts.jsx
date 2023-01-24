import React, { useContext, useState } from "react";
import Title from "./Title";
import ContactList from "./ContactList";
import NewContact from "./NewContact";
import UserProfile from "./UserProfile";
import { ChatContext } from "./Home";
export default function Contacts() {
	const [contacts, setContacts] = useState([]);
	const { username, userAvatar } = useContext(ChatContext);
	return (
		<div className="contacts">
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
