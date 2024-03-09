const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

const index_routes = require("./src/routes");
app.use("/", index_routes);

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to db");

    app.listen(port, () => {
      if (process.env.NODE_ENV == "dev") {
        console.log("App is running in dev mode and in port " + port);
        console.log(process.env.PORT);
      } else {
        console("App running in NO dev and in port " + port);
      }
    });
  } catch (e) {
    console.log("Error connecting to db", e);
  }
}

start();
