require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
//conexion a mongo db
(async() => {

  try {

    await mongoose.connect(process.env.MONGO_URI_TEST);
    console.log('Conectado a Mongo db');
  } catch (error) {

    console.log(error);

  }
})();
//rutas frontend

app.use('/', express.static(path.resolve('views','home')));

app.use('/components', express.static(path.resolve('views','components')));

app.use('/img', express.static(path.resolve('views','img')));

module.exports = app;
