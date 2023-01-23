const mongoose = require("mongoose");

const mssgSchema = new mongoose.Schema(
	{
		mssg: {
			type: String,
		},
		usersInvolved: {
			type: Array,
		},
		from: {
			type: String,
		},
		to: {
			type: String,
		},
	},
	{
		timestamps: {
			createdAt: true,
			updatedAt: true,
		},
	}
);

const mssgModel = mongoose.model("messages", mssgSchema);

module.exports = { mssgModel };
