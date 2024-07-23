const home = require('express').Router();


const User = require('../models/ativities');


home.get('/', async (req, res) => {

  if(res.statusCode === 200){
    return res.status(res.statusCode).json({ data:req.user, message: 'yes' });
  }else{
    console.log(res.statusCode);
    return res.status(res.statusCode).json({ message: 'no' });
  }

});

module.exports = home;