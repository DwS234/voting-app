const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const VoteController = require('./controllers/Vote-controller');

mongoose.connect(process.env.MONGO_URI, err => {
	if(err)
		console.log("Error while connecting to the database", err);
});

require('./passport/passport.js')(passport);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: process.env.SECRET, resave: false, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.resolve("client/build")));


app.get("/api/getVotings", (req, res) => {
	VoteController.getVotings().then(votings => {
		res.json(votings);
	});	
});

app.get("/auth/twitter", passport.authenticate('twitter'));

app.post("/api/update", (req, res) => {
	VoteController.updateVoting(req.body.updates, req.body.conditions).then(vote => {
		res.json(vote);
	}).catch(err => {
		res.json(err);
	});
});

app.post("/api/create", (req, res) => {
	console.log(req.body);
	VoteController.createVoting(req.body.title, req.body.options).then(vote => {
		res.json(vote);
	}).catch(err => {
		res.json(err);
	});
		
});


app.get("*", (req, res) => {
	res.sendFile(path.resolve("client/build/index.html"));
 });

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});