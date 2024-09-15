const express = require("express");
const mysql = require("mysql");
const port = 5000;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  users: "root",
  password: "root",
  database: "Node.js",
});

app.listen(port, () => {
  console.log("serveur est en ligne");
});

/*
app.get("/", (req, res) => {
  res.send("Hello world avec node.js ");
});

const users = require("./routes/users");
app.use("/users", users);
*/
