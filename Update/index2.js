const express = require("express");

const port = 5000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("HELLO NODE && WORLD");
});

app.listen(port, () => {
  console.log("serveur en ligne et opérationnelle");
});
