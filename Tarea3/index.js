const express = require('express');
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();
const index_routes = require('./src/routes');
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', index_routes);

async function start() {
	try {
		await mongoose.connect(process.env.DB_URL);
		console.log("Connected to db");

		app.listen(port, () => {
			if (process.env.NODE_ENV === "dev") {
				console.log(`Server running in dev mode and on port ${port}`);
			} else {
				console.log(`Server running`);
			}
		});
	} catch (error) {
		console.log("Error connecting to db", error);
	}
}

start();