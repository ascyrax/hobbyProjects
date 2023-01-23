import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { getUserContactList } from "../../utils/APIRoutes";
import Contact from "./Contact";
export default function ContactList({ username }) {
	const [contacts, setContacts] = useState([]);
	useEffect(() => {
		console.log("useEffect");
		async function getContactList() {
			const payload = { username };
			const serverResponse = await axios.post(getUserContactList, payload);
			console.log(serverResponse.data);
			if (serverResponse.data.status == true) {
				setContacts(serverResponse.data.contactList);
			}
		}
		getContactList();
	}, [username]);
	return (
		<div className="contactList">
			{contacts &&
				contacts.map((contact) => {
					return (
						<Contact key={username} username={contact[0]} avatar={contact[1]} />
					);
				})}
			{contacts &&
				contacts.map((contact) => {
					return (
						<Contact key={username} username={contact[0]} avatar={contact[1]} />
					);
				})}
		</div>
	);
}
