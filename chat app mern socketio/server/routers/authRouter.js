const authRouter = require("express").Router();
const {
	register,
	login,
	setAvatar,
	findUser,
	getUserContactList,
	getAvatar,
} = require("../controllers/authController");

authRouter
	.post("/register", register)
	.post("/login", login)
	.post("/setAvatar", setAvatar)
	.post("/findUser", findUser)
	.post("/getUserContactList", getUserContactList)
	.post("/getAvatar", getAvatar);

module.exports = { authRouter };
