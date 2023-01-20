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
let registerRouter = require("./routers/registerRouter");

app.use("/api/register", registerRouter);

// database connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(
	process.env.CLOUD_DB,
	() => {
		console.log("connected to the database");
	},
	(e) => console.error("database connection error \n", e)
);
let dbNative = mongoose.connection.db;
console.log(dbNative);

// get the list of databases
// why can i change the CLOUD_DB env variable and still get a connection successful message.
