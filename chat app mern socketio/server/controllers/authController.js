const { userModel } = require("../models/userModel");

async function login(req, res) {
	console.log(req.body);
	try {
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
	} catch (e) {
		console.log("ERROR LOGGING IN", e);
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
		const temp = [];
		temp.push("ascyrax");
		temp.push(
			"PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzEgMjMxIj48cGF0aCBkPSJNMzMuODMsMzMuODNhMTE1LjUsMTE1LjUsMCwxLDEsMCwxNjMuMzQsMTE1LjQ5LDExNS40OSwwLDAsMSwwLTE2My4zNFoiIHN0eWxlPSJmaWxsOiNmZjc1MjA7Ii8+PHBhdGggZD0ibTExNS41IDUxLjc1YTYzLjc1IDYzLjc1IDAgMCAwLTEwLjUgMTI2LjYzdjE0LjA5YTExNS41IDExNS41IDAgMCAwLTUzLjcyOSAxOS4wMjcgMTE1LjUgMTE1LjUgMCAwIDAgMTI4LjQ2IDAgMTE1LjUgMTE1LjUgMCAwIDAtNTMuNzI5LTE5LjAyOXYtMTQuMDg0YTYzLjc1IDYzLjc1IDAgMCAwIDUzLjI1LTYyLjg4MSA2My43NSA2My43NSAwIDAgMC02My42NS02My43NSA2My43NSA2My43NSAwIDAgMC0wLjA5OTYxIDB6IiBzdHlsZT0iZmlsbDojODU0OTJDOyIvPjxwYXRoIGQ9Im0xNDEuNzUgMTk1YTExNC43OSAxMTQuNzkgMCAwIDEgMzggMTYuNSAxMTUuNTMgMTE1LjUzIDAgMCAxLTEyOC40NiAwIDExNC43OSAxMTQuNzkgMCAwIDEgMzgtMTYuNWMwIDEwLjc2IDExLjc1IDE5LjQ4IDI2LjI1IDE5LjQ4czI2LjI1LTguNzIgMjYuMjUtMTkuNDh6IiBzdHlsZT0iZmlsbDojMDAwOyIvPjxwYXRoIGQ9Im00MS42NjggODcuMDczYy05LjIzMTktMC4wMjMxLTExLjYzIDYuNTEwNCAyLjI2NzYgMTcuNjYtMTQuMDE1IDEuMTIzMS00LjM2NjIgMTYuNDU3IDQuODc1IDI0LjY2IDQuMDY4NiAzLjAxOTkgNi40NjQ3IDUuNDY1NyA1LjUwNzggMS4xMzQ4LTEuMjA3OS00LjkxNzgtMS44MTg0LTkuOTYzNC0xLjgxODQtMTUuMDI3IDMuMjZlLTQgLTcuNTY5MiAxLjI1NDctMTUuMDE2IDMuNzg4My0yMi4xODMgMC41NzA0OC0xLjc4NzYgMS4wNjg5LTIuMDMwNi0wLjM3NzIxLTIuNjgzOS01LjU0MDUtMi40NDc4LTEwLjM3NS0zLjU1MTEtMTQuMjQzLTMuNTYwOHoiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHBhdGggZD0ibTE4NS40OCA4OS41MTNjLTIuNDQxOC0wLjExMTg5LTUuNDYxOCAwLjgxMTg3LTkuNTE0OCAzLjIxMjEtMS4zMTQgMC44MTcyOS0wLjcwMDc1IDEuOTk1LTAuMzIzMDEgMy4yNjUzIDMuMTk0IDEwLjk4MiAzLjgyMTUgMjIuNDYyIDEuMjUzOCAzMy42MjgtMC4zMTYxMyAxLjY4OC0wLjQ3NjQ5IDMuNTY5IDIuNjk1MyAxLjM1MTYgNy43MDE2LTUuMzcxIDE5LjE3LTE4LjczNCAxNi45MTgtMjYuMTA1LTEuNDI1MS0zLjkxNzctMTEuNC0wLjM1NTQ2LTExLjQtMC4zNTU0NnM0Ljk4Ny00LjI3NTUgNS4zNDM3LTkuNjE5MWMwLjIwMDQ4LTMuMDA1Ny0xLjUyMzctNS4yMTg5LTQuOTcyNi01LjM3N3oiIHN0eWxlPSJmaWxsOm5vbmU7Ii8+PHBhdGggZD0ibTkxLjY4OSAzNi4xMDhjLTMuNzI5OC03LjM4NjQtOS41ODU5LTEwLjUwNC0xNy41NzgtNi43ODkxLTkuNTE5NCA0LjU5MDctMTUuNjI5IDE4LjQ0NC0xMy40MTYgMjkuMjMyIDAgMC04LjU1MTEtNC45ODc4LTE4LjE3LTMuNTYyNS0xOS42MjMgOC4wOTQtMS40MTAyIDI5Ljg2OSAxMC44MTcgMzcuMzQyIDIuMDc1IDEuMjk3IDIuNTc5MiAxLjc0MzIgMy40MjkxLTAuMzc2ODUgMi42NzQ2LTYuNTM3NCA2LjE4ODYtMTIuNzIyIDExLjI5Ny0xNy43MDkgNC4xMDM5IDguNzQyNyAxNC42MjkgNC4xODA5IDIwLjAwNi0wLjE0MDYyIDQuNDg3MyA5LjY4MzggMTAuMzc3IDYuMzUzNSAxNS4zNzcgMy40Nzg1IDQuMDc2NCA3Ljg4MjkgMTAuNzU2IDcuMjUgMTcuNjMxIDAuMDYyNSA0Ljg3NSA0LjU2MjUgMTQuNzEzIDQuMTg2NyAxNS41NTUtMy40MjYgOC40NzUzIDIuNjI0NCAxNC4wMTIgMTAuNDM3IDIyLjk2Mi0xLjQ3NjQgOC44NTUyIDYuODIyMSAxNC40MDcgMTYuODUzIDE3LjEyMiAyNy41MSAwLjM0IDEuNTU0IDEuMTc1IDAuODU1NjUgMi4yMjEyIDAuNDQzMTUgMTAuMjU1LTQuMjg2IDIyLjg0Mi0xNS43NDkgMTUuNzA1LTIzLjk3NS0zLjU2MjMtMy41NjIzLTEzLjUzOS0yLjEzODctMTMuNTM5LTIuMTM4N3M2Ljc3LTcuMTIzMyA5LjI2MzctMTguMTY4YzIuNDkzNi0xMS4wNDMtMjMuNTE0LTQuOTg4My0yMy41MTQtNC45ODgzczcuNDgxOC01LjY5OTMgMTIuMTEzLTEzLjUzN2M0LjYzMTQtNy44Mzc4LTIuNDk0My0xMS43NTYtMTEuMDQ1LTExLjA0My04LjU0OTYgMC43MTIwNC0xNy4xIDcuNDgwNS0xNy4xIDcuNDgwNXMzLjM5NDYtNy44MDU1LTMuNTYyNS0xMi44MjZjLTkuNTkzNS02LjkyMzQtMjMuODY5IDYuNDEyMS0yMy44NjkgNi40MTIxLTQuMjU2Mi0yNi44MzUtMjQuODcyLTYuMzg2LTMxLjcwNyA4LjE5NTN6IiBzdHlsZT0iZmlsbDojNjMzYjFkOyIvPjxwYXRoIGQ9Im04Ni44NTEgMTAwLjM5YTQuOTQgNC45NCAwIDEgMCA0LjkyOTcgNSA1IDUgMCAwIDAtNC45Mjk3LTV6bTU3LjIyMSAwYTQuOTQgNC45NCAwIDEgMCA0LjkzOTQgNC45Mzk0IDQuOTQgNC45NCAwIDAgMC00LjkzOTQtNC45Mzk0eiIgc3R5bGU9ImZpbGw6IzAwMDsiLz48cGF0aCBkPSJtODYuMjA3IDg5LjM2NWMtMjUuNTA0IDAtMjEuNTAzIDYuODU2MS0yMS4wMzUgMTkuNTk2IDAuODAxNzcgMTguMTIxIDE3Ljc2MyAxNi41MTQgMjEuMjAxIDE2LjYzOSAxNC43NTgtMC4wNDEgMjAuNTE4LTguMjI3IDIyLjk1MS0yMi45MzIgMS44MTY2LTEwLjczMS05LjI1MS0xMy4xNzQtMjMuMTE3LTEzLjMwM3ptNTguNTk4IDBjLTEzLjg2NiAwLjEyODQtMjQuOTM2IDIuNTcxNy0yMy4xMTkgMTMuMzAzIDIuNDMzMiAxNC43MDUgOC4xOTM2IDIyLjg5MSAyMi45NTEgMjIuOTMyIDMuNDM4My0wLjEyNSAyMC4zOTkgMS40ODI4IDIxLjIwMS0xNi42MzkgMC0xOC45NjUtMC40Nzk1OC0xOS41OTYtMjEuMDMzLTE5LjU5NnoiIHN0eWxlPSJmaWxsOiNmZjIzZmE7b3BhY2l0eTowLjM5OyIvPjxwYXRoIGQ9Im0xNjkuODcgOTAuMjU1YTAuNTEgMC41MSAwIDAgMC0wLjQzOTkxLTAuNTIgMTY3LjY0IDE2Ny42NCAwIDAgMC0yMi42LTEuNjgwMWMtMTIgMC0yNy40NyAzLjc2MDEtMzAuMTcgMy43NjAxaC0yLjRjLTEuMjQ5OSAwLTUuMjktMC44MDk5Ni0xMC40NS0xLjY4MDFhMTI0LjM1IDEyNC4zNSAwIDAgMC0xOS43Mi0yLjA4IDE2Ni4xOCAxNjYuMTggMCAwIDAtMTkuMzEgMS4yNGMtMS41NiAwLjE3OTk5LTIuNjkgMC4zNTAwOS0zLjI4OTkgMC40NDAwOWEwLjUxIDAuNTEgMCAwIDAtMC40NDAwNyAwLjUybC0wLjA5MSA2LjQ1MDFhMC41NyAwLjU3IDAgMCAwIDAuMzMwMTIgMC41MmwwLjczOTk0IDAuMjM5OTJjMS4wOCAwLjQxOTkyIDEuMDAwMSAxOS44NSA2Ljc4IDI0LjcxIDMuNDQwMSAyLjg1OTkgNi41MSA0LjQ4OTkgMTkuNDIgNC40ODk5IDcuNDY5OSAwIDEyLjE3LTEuOTk5OSAxNi42My04IDMuMjEtNC4zMiA2LjA5OTktMTQuNTUgNi4wOTk5LTE0LjU1IDAuODIwMDYtNC4wNyAzLjc3MDItNC41MiA0LjQzLTQuNTgwMWgwLjEyMDY4YzAuMTEwNzggMCAzLjY2IDAuMDU5MyA0LjU3IDQuNTgwMSAwIDAgMi44NTk5IDEwLjIyIDYuMDY5OSAxNC41NCA0LjQ2MDEgNS45OTk5IDkuMTYwMSA4IDE2LjYzIDggMTIuOTEgMCAxNi0xLjYzIDE5LjQyLTQuNDkwMSA1Ljc4OTgtNC44NiA1LjY5OTgtMjQuMjkgNi43OC0yNC43MWwwLjczOTk0LTAuMjM5OTNhMC41NyAwLjU3IDAgMCAwIDAuMzI5OTYtMC41MmwtMC4xMjA2OC02LjQ1MDF6bS02NSAyM2MtMS45MTAxIDQuNS02LjggMTAuMjktMTMuNyAxMC42NC0yMC43IDAuOTk5ODUtMjEuNjUtNC43NDAxLTIzLTkuMzIwMWEzMS40NSAzMS40NSAwIDAgMS0xLjIwOTktMTMuMThjMC41Mzk5Ny00LjU3OTkgMS43LTcuMjY5OSAzLjc4MDEtOC42MjAxYTkuMyA5LjMgMCAwIDEgNC4zNDk5LTEuNTEgODUuMDcgODUuMDcgMCAwIDEgMTEuNC0wLjUyIDU5LjIzIDU5LjIzIDAgMCAxIDkuMjA5OSAwLjY5OTk5YzcuMzcgMS4yIDEyLjM1IDMuNzAwMSAxMi4zNSA2LjE2MDFhNDYuMTIgNDYuMTIgMCAwIDEtMy4yMyAxNS42NHptNTggMS4zMjAxYy0xLjM0IDQuNTc5OS0yLjI5IDEwLjM2LTIzIDkuMzIwMS02LjkxLTAuMzUwMS0xMS44MS02LjE0MDEtMTMuNzEtMTAuNjRhNDYuMzUgNDYuMzUgMCAwIDEtMy4yMi0xNS42NGMwLTMuMzkgOS40My02Ljg1OTkgMjEuNTYtNi44NTk5IDEyLjEzIDAgMTQgMC44OTk5NiAxNS43NSAxLjk5OTkgMi4wOCAxLjM1MDIgMy4yMzk4IDQgMy43NyA4LjYyMDFhMzEuMjMgMzEuMjMgMCAwIDEtMS4xNjAxIDEzLjE3eiIgc3R5bGU9ImZpbGw6IzAwMDsiLz48cGF0aCBkPSJtMTE4LjA1IDE0OC4zOGMtMS41MDY0IDAuNTkxOTItMi41OTUgMi4wMjY0LTIuNjE5MSAzLjk4NjMtMC4wNTc0IDEuMzk3NyAwLjUzNDIxIDMuNTYxMSAzLjY3NTggNS43OTQ5IDguMDU0NCA0Ljk0NDYgMjEuNTA3IDMuNjg2MiAyMS4yNTUtNy4xNjU4LTQuNjY0IDQuODIxOS0xMC4wMjEgNS42Mzc3LTE0Ljc3MyAwLjczOTA3LTEuMjMyOC0xLjE1OTktMi4zNjk0LTIuNDAzMi0zLjkyOTQtMy4xNDA4LTEuMDk0Ni0wLjUwNDI0LTIuMjI1Ny0wLjYxMDcxLTMuNjA5Ni0wLjIxMzM3eiIgc3R5bGU9ImZpbGw6IzAwMDsiLz48cGF0aCBkPSJtMTMzLjYxIDE1NC45M2MzLjA3MzEtMC40ODgxNiA1LjU3MDItMi44NDU3IDUuNDQzOC00LjUwNTktMC40NzgwMS00LjgzMTEtNS43MzE3LTMuMDkxNy00LjMzNjktMC4zMTQwNS0yLjgxMDMtMS40NDQ1LTEuODM0My0zLjg4NjIgMC41MDQyNy00LjczMjQgMi4wNTA5LTAuNzk5NDIgNS4wOTM3IDAuMzQzMTQgNi4yMDAyIDIuNjM3NiAyLjIyMjkgNy4zNDIyLTMuNDM3NiAxMS42OC0xMC4zODQgMTIuNTYxeiIgc3R5bGU9ImZpbGw6IzAwMDsiLz48cGF0aCBkPSJtMTEyLjgxIDE0OC4zOGMxLjUwNjQgMC41OTE5MiAyLjU5NSAyLjAyNjQgMi42MTkxIDMuOTg2MyAwLjA1NzQgMS4zOTc3LTAuNTM0MjEgMy41NjExLTMuNjc1OCA1Ljc5NDktOC4wNTQ0IDQuOTQ0Ni0yMS41MDcgMy42ODYyLTIxLjI1NS03LjE2NTggNC42NjQgNC44MjE5IDEwLjAyMSA1LjYzNzcgMTQuNzczIDAuNzM5MDcgMS4yMzI4LTEuMTU5OSAyLjM2OTQtMi40MDMyIDMuOTI5NC0zLjE0MDggMS4wOTQ2LTAuNTA0MjQgMi4yMjU3LTAuNjEwNzEgMy42MDk2LTAuMjEzMzd6IiBzdHlsZT0iZmlsbDojMDAwOyIvPjxwYXRoIGQ9Im05Ny4yNTIgMTU0LjkzYy0zLjA3MzEtMC40ODgxNi01LjU3MDItMi44NDU3LTUuNDQzOC00LjUwNTkgMC40NzgwMS00LjgzMTEgNS43MzE3LTMuMDkxNyA0LjMzNjktMC4zMTQwNSAyLjgxMDMtMS40NDQ1IDEuODM0My0zLjg4NjItMC41MDQyNy00LjczMjQtMi4wNTA5LTAuNzk5NDItNS4wOTM3IDAuMzQzMTQtNi4yMDAyIDIuNjM3Ni0yLjIyMjkgNy4zNDIyIDMuNDM3NiAxMS42OCAxMC4zODQgMTIuNTYxeiIgc3R5bGU9ImZpbGw6IzAwMDsiLz48L3N2Zz4="
		);

		newUser.userContactList.push(temp);
		await newUser.save();
		res.send({
			mssg: "New user registered.",
			status: true,
			userAvatar: newUser.userAvatar,
		});
		return;
	} catch (e) {
		console.log("ERROR REGISTERING", e);
	}
}

async function setAvatar(req, res) {
	console.log(req.body);
	// console.log(req.body);

	try {
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
	} catch (e) {
		console.log("ERROR SETTING AVATAR", e);
	}
}

async function findUser(req, res) {
	console.log(req.body);
	// console.log(req.body);
	try {
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
	} catch (e) {
		console.log("ERROR FINDING USER", e);
	}
}

async function getUserContactList(req, res) {
	console.log(req.body);
	try {
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
	} catch (e) {
		console.log("ERROR GETTING CONTACT LIST", e);
	}
}

async function getAvatar(req, res) {
	console.log(req.body);
	try {
		const { username } = req.body;
		const user = await userModel.findOne({ username });

		if (user) {
			res.send({ status: true, userAvatar: user.userAvatar });
		} else {
			res.send({ status: false });
		}
	} catch (e) {
		console.log("ERROR GETTING AVATAR", e);
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
