const regRouter = require("express").Router();

const { register } = require("../controllers/registerController");

regRouter.post("/", register);

module.exports = regRouter;
