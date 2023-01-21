const authRouter = require("express").Router();
const { register, login } = require("../controllers/authController");

authRouter.post("/register", register).post("/login", login);

module.exports = { authRouter };
