const express = require('express');
const cors = require('cors');
//router
const disciplinasRoutes = require('./routes/DisciplinaRoutes.js');


//mongo conn
require('./db/mongo.connection');


//main
const app = express();


//configuração

app.use(cors());
app.use(express.json());


/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
   });
*/

app.use(disciplinasRoutes);

app.listen(3000,() => {
    console.log("Server in http://localhost:3000");
  });
  

module.exports = app;
