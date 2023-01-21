const { userModel } = require("../models/userModel");

async function login(req, res) {
	let user = await userModel.findOne(req.body);
	// console.log("user", user);

	if (user) {
		res.send({ mssg: "login successful", status: true });
		return;
	} else {
		res.send({ mssg: "No user found. Retry.", status: false });
		return;
	}
}

async function register(req, res) {
	// console.log("req.body", req.body);
	try {
		let { username, email, password, password2 } = req.body;

		let usernameCheck = await userModel.findOne({ username });
		// console.log("usernameCheck", usernameCheck);
		if (usernameCheck) {
			res.send({ mssg: "username already exists. Retry.", status: false });
			return;
		}

		let emailCheck = await userModel.findOne({ email });
		// console.log("emailCheck", emailCheck);
		if (emailCheck) {
			res.send({ mssg: "email already exists. Retry.", status: false });
			return;
		}

		const newUser = await userModel.create(req.body);
		res.send({ mssg: "New user registered.", status: true });
		return;
	} catch (e) {
		console.log("error", e);
	}
}

module.exports = { login, register };
