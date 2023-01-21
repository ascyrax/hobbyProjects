const authRouter = require("express").Router();
const { register, login, setAvatar } = require("../controllers/authController");

authRouter
	.post("/register", register)
	.post("/login", login)
	.post("/setAvatar", setAvatar);

module.exports = { authRouter };
