const router = require("express").Router();

const usersRoutes = require("../routes/users");

router.use("/users", usersRoutes);

router.get("/", (req, res) => {
  res.send("Index route");
});

module.exports = router;
