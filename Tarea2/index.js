const express = require('express');
require('dotenv').config();

const app = express();
const index_routes = require('../Tarea2/routes');
const port = process.env.PORT || 3000;

// app.use(express.json());

app.use('/', index_routes);

app.listen(port, () => {
    if(process.env.NODE_ENV === 'dev'){
        console.log('App is running in dev mode and in port ' + port);
    } else {
        console.log('NO DEV and App is running in port' + port);
    }

})
