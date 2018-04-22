import { VoteModel } from '../models/Vote-model.js';

export const createVoting = (title, options) => {
	var newVoting = new VoteModel({title, options});
	newVoting.save(err => {
		if(err) {
			console.log("Error while saving new Voting", err);
		}
	});
};