const express = require('express');
const app = express();

const path = require('path');

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