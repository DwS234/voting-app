const VoteModel = require("../models/Vote-model");

module.exports = {
	createVoting: function(title, options) {
		return new Promise( (resolve, reject) => {
			VoteModel.create({title, options}, (err, vote) => {
				if(err)
					reject(err);
				else {
					resolve(vote);
				}
			})
		})
	},
	getVotings: function() {
		return new Promise( (resolve, reject) => {
			VoteModel.find({}, (err, votes) => {
			if(err)
			{
				console.log("Error in Vote Controller: ", err);
				reject(err);
			} else {
				resolve(votes);
			}	
		});
		});
	},
	updateVoting: function(updates, conditions) {
		return new Promise( (resolve, reject) => {
			VoteModel.findOneAndUpdate(conditions, updates, {new: true}, (err, vote) => {
				if(err)
					reject(err);
				else {
					resolve(vote);
				}
			});
		});
	}
}
