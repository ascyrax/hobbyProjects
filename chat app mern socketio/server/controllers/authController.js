const { userModel } = require("../models/userModel");

async function login(req, res) {
	let user = await userModel.findOne(req.body);
	// console.log("user", user);

	if (user) {
		res.send({
			mssg: "login successful",
			status: true,
			userAvatar: user.userAvatar,
		});
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
		res.send({
			mssg: "New user registered.",
			status: true,
			userAvatar: newUser.userAvatar,
		});
		return;
	} catch (e) {
		console.log("error", e);
	}
}

async function setAvatar(req, res) {
	console.log(req.body);

	const { username, userAvatar } = req.body;

	const user = await userModel.findOneAndUpdate(
		{ username },
		{
			userAvatar,
		}
	);

	res.send({
		mssg: "avatar set successfully",
		status: true,
		userAvatar: user.userAvatar,
	});
	return;
}

async function getUser(req, res) {
	console.log(req.body);
	const { username, usernameToFind } = req.body;
	const user = await userModel.findOne({ username });
	const userToFind = await userModel.findOne({
		usernameToFind,
	});
	user.userContactList.push(userToFind._id);
	await user.save();

	res.send({ mssg: "user found", status: true });
}

module.exports = { login, register, setAvatar, getUser };
