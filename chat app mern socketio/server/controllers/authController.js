const { userModel } = require("../models/userModel");

async function login(req, res) {
	console.log(req.body);
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
	console.log(req.body);
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
	// console.log(req.body);

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

async function findUser(req, res) {
	console.log(req.body);
	// console.log(req.body);
	const { username, usernameToFind } = req.body;
	const user = await userModel.findOne({ username });
	const userToFind = await userModel.findOne({ username: usernameToFind });
	if (userToFind) {
		const temp = [];
		temp.push(userToFind.username);
		temp.push(userToFind.userAvatar);
		user.userContactList.push(temp);
		await user.save();
		res.send({
			mssg: "user found",
			status: true,
			contactList: user.userContactList,
		});
	} else {
		res.send({ mssg: "user not found", status: false });
	}
}

async function getUserContactList(req, res) {
	console.log(req.body);
	const { username } = req.body;
	// console.log(username);
	const user = await userModel.findOne({ username });
	// console.log("getContactList", user);

	if (user) {
		const contactList = user.userContactList;
		res.send({ status: true, contactList });
	} else {
		res.send({ status: false });
	}
}

async function getAvatar(req, res) {
	console.log(req.body);
	const { username } = req.body;
	const user = await userModel.findOne({ username });

	if (user) {
		res.send({ status: true, userAvatar: user.userAvatar });
	} else {
		res.send({ status: false });
	}
}

module.exports = {
	login,
	register,
	setAvatar,
	findUser,
	getUserContactList,
	getAvatar,
};
