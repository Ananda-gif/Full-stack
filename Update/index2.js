const express = require("express");
const mysql = require("mysql");
const port = 5000;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node",
  /*socketPath:
    "WINDOWS CREATORFull-stackUpdate\node_modulesmysqllibConnection.js)",*/
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion : " + err.stack);
    return;
  }
  console.log("Connecté à la base de données MySQL.");
});

/*--------------------------------------------------------------*/
// les anciennes commandes que je peut utiliser
/*
app.get("/", (req, res) => {
  res.status(200).send("HELLO NODE && WORLD");
});

const contact = require("./routes/contact");
app.use("/contact", contact);
*/
/* --------------------------------------------------------------*/

app.listen(port, () => {
  console.log("serveur en ligne et opérationnelle");
});
