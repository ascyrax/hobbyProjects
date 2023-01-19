// load .env file variables into process.env
require("dotenv").config();

// new express app
const express = require("express");
const app = express();

// cors permissions
const cors = require("cors");
app.use(cors());

// req.body is not undefined after this
app.use(express.json());

// listen
app.listen(process.env.PORT, () => {
	console.log("listening on port ", process.env.PORT);
});

// routing
let router = require("./");

app.post("/api/register", (req, res) => {
	console.log(req.body);
	res.send({ mssg: "hello" });
});
