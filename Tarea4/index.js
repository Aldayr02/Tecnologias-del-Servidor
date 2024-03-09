const express = require("express");
require("dotenv").config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3000;

const index_routes = require("./src/routes");

app.use("/", index_routes);

app.listen(port, () => {
  if (process.env.NODE_ENV == "dev") {
    console.log("App is running in dev mode and in port " + port);
    console.log(process.env.PORT);
  } else {
    console("App running in no dev");
  }
});
