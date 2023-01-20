const mongoose = require("mongoose");

const chatUserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: true,
			updatedAt: true,
		},
	}
);

const userModel = mongoose.model("users", chatUserSchema);

module.exports = { userModel };
