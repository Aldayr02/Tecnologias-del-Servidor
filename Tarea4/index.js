//check pull request

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const index_routes = require('./src/routes');
const { engine } = require('express-handlebars');
require('dotenv').config({ path: './.env' });

const app = express();

app.use(express.json());
app.use('/', index_routes);
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

const port = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Connected to db');

    app.listen(port, () => {
      if (process.env.NODE_ENV == 'dev') {
        console.log('App is running in dev mode and in port ' + port);
        console.log(process.env.PORT);
      } else {
        console('App running in NO dev and in port ' + port);
      }
    });
  } catch (e) {
    console.log('Error connecting to db', e);
  }
}

start();
