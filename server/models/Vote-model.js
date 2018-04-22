const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	title: 'string',
	options: 'mixed'
});

const VoteModel = mongoose.model("Vote", schema);

module.exports = VoteModel;