const express = require("express");

const PORT = 8080;

const app = express();
app.get("/", (req, res) => {
  res.send("hello wold");
});

app.listen((PORT) => {
  console.log("running server");
});
