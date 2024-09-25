const express = require("express");
const mysql = require("mysql2");
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node",
  });

  connection.connect((err) => {
    if (err) {
      console.error("Erreur de connexion : " + err.stack);
      return;
    }
    console.log("Connecté à la base de données MySQL.");
  });

  connection.query("SELECT*FROM users", (err, results, fields) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log("serveur en ligne et opérationnelle");
});
