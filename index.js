const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(3000 || process.env.PORT, () => {
	console.log("Server Started at port 3000");
});
