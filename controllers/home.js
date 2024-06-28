const home = require('express').Router();

const { status } = require('init');
const User = require('../models/ativities');


home.get('/', async (req, res) => {

  if(res.statusCode === 200){
    return res.status(res.statusCode).json({ data:req.user, message: 'usuario inicio sesion' });
  }else{
    return res.status(res.statusCode).json({ message: 'usuario no logeado' });
  }

});

module.exports = home;