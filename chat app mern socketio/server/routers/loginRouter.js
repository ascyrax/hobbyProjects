const loginRouter = require("express").Router();

let { login } = require("../controllers/loginController");

loginRouter.post("/", login);

module.exports = loginRouter;
