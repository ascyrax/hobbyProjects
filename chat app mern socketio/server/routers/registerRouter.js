const regRouter = require("express").Router();

let { register } = require("../controllers/registerController");

regRouter.post("/api/register", register);

module.exports = regRouter;
