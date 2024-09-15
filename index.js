const express = require("express");
const port = 5000;

const app = express();

// GET : POUR RECEPTIONNER LES MESSAGES

app.get("/", (req, res) => {
  res.send("Hello world avec node.js ");
});

app.listen(port, () => {
  console.log("serveur est en ligne");
});
