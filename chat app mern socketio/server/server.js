// load .env file variables into process.env
require("dotenv").config();

// new express app
const express = require("express");
const app = express();

// cors permissions
const cors = require("cors");
app.use(
	cors({
		origin: "*",
	})
);

// req.body is not undefined after this
app.use(express.json());

// listen
const server = app.listen(process.env.PORT, () => {
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

app.use("/", (req, res) => {
	res.send("<h1>server up & running</h1>");
});

// SOCKET
const io = require("socket.io")(server, {
	cors: {
		origin: ["http://localhost:5173", "https://herochat.netlify.app"],
	},
});

io.on("connect", (socket) => {
	console.log(socket.id);
	socket.on("text", (obj) => {
		socket.broadcast.emit("server-broadcast", obj);
	});
});
