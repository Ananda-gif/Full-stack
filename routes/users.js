//      Routes : url
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: " Tous les utilisateurs" });
});

router.get("/:id", (req, res) => {
  req.params.id;
  req.json({
    id: req.params.id,
  });
});

module.exports = router;
