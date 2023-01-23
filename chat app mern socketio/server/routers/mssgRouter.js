const mssgRouter = require("express").Router();
const { addMssg, getMssg } = require("../controllers/mssgController");
mssgRouter.post("/addMssg", addMssg).post("/getMssg", getMssg);

module.exports = { mssgRouter };
