const { userModel } = require("../models/userModel");

async function register(req, res) {
	console.log("req.body", req.body);
	try {
		let { username, email, password, password2 } = req.body;

		let usernameCheck = await userModel.findOne({ username });
		// console.log("usernameCheck", usernameCheck);
		if (usernameCheck) {
			res.send({ mssg: "username already exists. Retry." });
			return;
		}

		let emailCheck = await userModel.findOne({ email });
		// console.log("emailCheck", emailCheck);
		if (emailCheck) {
			res.send({ mssg: "email already exists. Retry." });
			return;
		}

		const newUser = await userModel.create(req.body);
		res.send({ mssg: "New user registered." });
		return;
	} catch (e) {
		console.log("error", e);
	}
}

module.exports = { register };
