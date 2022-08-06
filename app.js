const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/home.html"));
});

app.listen(port, () => {
  console.log("App running on port 3000");
}).keepAliveTimeout = 65000;
