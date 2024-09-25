const express = require("express");
const mysql = require("mysql");
const port = 5000;
const app = express();

// les anciennes commandes que je peut utiliser
/*
app.get("/", (req, res) => {
  res.status(200).send("HELLO NODE && WORLD");
});

const contact = require("./routes/contact");
app.use("/contact", contact);
*/

app.listen(port, () => {
  console.log("serveur en ligne et opérationnelle");
});
