const express = require("express");
const mysql = require("mysql");
const port = 5000;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "users", // Nom d'utilisateur
  password: "new_password", // Mot de passe
  database: "node2", // Nom de la base de données
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion : " + err.stack);
    return;
  }
  console.log("Connecté à la base de données MySQL.");
});

/*--------------------------------------------------------------*/

/*
const connection = mysql.createConnection({
  host: "localhost",
  users: "root",
  database: "node2",
});

connection.connect((err) => {
  if (err) {
    console.error("Errer de connexion : " + err.stack);
    return;
  }

  console.log("connexion reussie à la base de données");
});
*/

app.listen(port, () => {
  console.log("serveur est en ligne");
});
