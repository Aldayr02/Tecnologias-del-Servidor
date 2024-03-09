const router = require("express").Router();

router.get("", (req, res) => {
  res.send("Index route");
});

module.exports = router;
