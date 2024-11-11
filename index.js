require('dotenv').config()
const express = require("express");

const app = express();
const port = 3000;

app.get("", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page is here</h1>");
});

app.get("/techbaz", (req, res) => {
  res.send("<h1>techbaz is here</h1>");
});


app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`);
});
