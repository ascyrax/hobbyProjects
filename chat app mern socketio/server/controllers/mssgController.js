const { mssgModel } = require("../models/mssgModel");
async function addMssg(req, res) {
	console.log(req.body);
	try {
		const { mssg, from, to } = req.body;
		const usersInvolved = [to, from];
		usersInvolved.sort();
		const newMssg = await mssgModel.create({ mssg, from, to, usersInvolved });
		if (newMssg) {
			res.send({ status: true, mssg: "mssg was added to the database" });
		} else {
			res.send({ status: false, mssg: "mssg was not added to the database" });
		}
	} catch (e) {
		console.log("ERROR ADDING MESSAGE", e);
	}
}

async function getMssg(req, res) {
	console.log(req.body);
	try {
		const { usersInvolved, to, from } = req.body;
		const messages = await mssgModel.find({ usersInvolved });
		if (messages) {
			res.send({ status: true, messages });
		}
	} catch (e) {
		console.log("ERROR GETTING MESSAGEES", e);
	}
}

module.exports = { addMssg, getMssg };
