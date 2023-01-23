const authRouter = require("express").Router();
const {
	register,
	login,
	setAvatar,
	findUser,
	getUserContactList,
} = require("../controllers/authController");

authRouter
	.post("/register", register)
	.post("/login", login)
	.post("/setAvatar", setAvatar)
	.post("/findUser", findUser)
	.post("/getUserContactList", getUserContactList);

module.exports = { authRouter };
