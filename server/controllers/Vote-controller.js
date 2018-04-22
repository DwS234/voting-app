const VoteModel = require("../models/Vote-model");

module.exports = {
	createVoting: function(title, options) {
		var newVoting = new VoteModel({title, options});
		newVoting.save(err => {
			if(err) {
				console.log("Error while saving new Voting", err);
				return false;
			}
		});
		return true;
	}
}
