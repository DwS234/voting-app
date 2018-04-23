const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const VoteController = require('./controllers/Vote-controller');

mongoose.connect(process.env.MONGO_URI, err => {
	if(err)
		console.log("Error while connecting to the database", err);
});

app.use(express.static(path.join(__dirname, "client/build")));
app.use(bodyParser.json());

app.get("/api/getAll", (req, res) => {
	var object = {
		title: "gssdfd",
		options: "fdsfasd"
	}
	res.json(object);
});

app.post("/api/create", (req, res) => {
	console.log(req.body);
	if(VoteController.createVoting(req.body.title, req.body.options))
		res.json("Voting has been created successfully");
	else 
		res.json("Something went wrong while creating Voting");
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});