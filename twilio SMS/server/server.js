const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv").config();
app.use(express.json());

app.listen(process.env.PORT || 4000, () => {
	console.log("listening on port:", process.env.PORT || 4000);
});

let accoundSid = process.env.TWILIO_ACCOUNT_SID;
let authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accoundSid, authToken, {
	lazyLoading: true,
});

app.post("/api/sendText", async (req, res) => {
	const { text, recipient } = req.body;
	console.log({ text, recipient });
	try {
		client.messages
			.create({
				body: text,
				to: recipient,
				from: process.env.TWILIO_PHONE_NO,
			})
			.then((message) => console.log(message.sid));
		res.send({ mssg: "message sent", status: true });
	} catch (e) {
		res.send({ mssg: "message not sent", status: false });
		console.log("ERROR SENDING MESSAGE", e);
	}
});
