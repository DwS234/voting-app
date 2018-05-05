const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	twitter: {
		id: String,
		token: String,
		displayName: String,
		username: String
	}
});

module.exports = mongoose.model("User", UserSchema);