const loginRouter = require("express").Router();

let { login } = require("../controllers/loginController");

loginRouter.post("/api/login", login);

module.exports = loginRouter;
