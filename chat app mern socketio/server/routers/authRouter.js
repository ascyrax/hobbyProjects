const authRouter = require("express").Router();
const {
	register,
	login,
	setAvatar,
	getUser,
} = require("../controllers/authController");

authRouter
	.post("/register", register)
	.post("/login", login)
	.post("/setAvatar", setAvatar)
	.post("/getUser", getUser);

module.exports = { authRouter };
