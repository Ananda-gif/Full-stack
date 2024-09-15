const express = require("express");
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world avec node.js ");
});

const users = require("./routes/users");
app.use("/users", users);

app.listen(port, () => {
  console.log("serveur est en ligne");
});
