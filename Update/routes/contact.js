const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "CONTACT ME WITH THIS SITE" });
});

module.exports = router;
