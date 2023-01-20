const { userModel } = require("../models/userModel");

async function register(req, res) {
	console.log("req.body", req.body);
	let { username, email, password, password2 } = req.body;
	let userCheck = await userModel.findOne({ username });
	console.log("userCheck", userCheck);
	if (userCheck) {
		res.send({ mssg: "user already exists" });
	} else {
		await userModel.create(req.body);
		res.send({ mssg: "new user registered" });
	}
}

module.exports = { register };
