const { userModel } = require("../models/userModel");

async function login(req, res) {
	let user = await userModel.findOne(req.body);
	console.log("user", user);

	if (user) {
		res.send({ mssg: "login successful" });
		return;
	} else {
		res.send({ mssg: "No user found. Retry." });
		return;
	}
}

module.exports = { login };
