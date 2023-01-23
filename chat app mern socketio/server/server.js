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

// database connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
mongoose.connect(process.env.CLOUD_DB, {}, (e) => {
	if (e) console.error("DATABASE CONNECTION ERROR \n", e);
	else {
		console.log("DATABASE CONNECTION SUCCESSFUL");
	}
});

// routing
const { authRouter } = require("./routers/authRouter");
app.use("/api/auth", authRouter);

const { mssgRouter } = require("./routers/mssgRouter");
app.use("/api/mssg", mssgRouter);
