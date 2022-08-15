import { useState, useEffect } from "react";

import "./styles.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
	const [contacts, setContacts] = useState([
		{
			fullname: "Ali",
			phone_number: "444333",
		},
		{
			fullname: "Mahammad",
			phone_number: "222555",
		},
		{
			fullname: "Henry",
			phone_number: "666999",
		},
	]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);

	return (
		<div id="container">
			<h1>Contacts</h1>
			<List contacts={contacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
}

export default Contacts;
