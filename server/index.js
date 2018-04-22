const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

mongoose.connect(process.env.MONGO_URI, err => {
	if(err)
		console.log("Error while connecting to the database", err);
});

app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api", (req, res) => {
	res.json("gsgfsdgsd");
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname + "client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});