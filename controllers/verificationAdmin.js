const verificationAdmin = require('express').Router();
const admin = require('../models/veriadmin');
const jwt = require('jsonwebtoken');
const date = new Date();

verificationAdmin.post('/', async (req, res) => {
  const user = req.body.name;
  const password = req.body.password;

  /*const datas = new admin({
    user,
    password
  });*/
  //datas.save();
  const result = await admin.find({ user, password });
  console.log(result[0]);


  if(result[0] !== undefined){

    const userForToken = {
      id:result[0]._id
    };
    console.log(result[0]._id);

    const token = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET_ADMIN,
      {
        expiresIn:'1d'
      }
    );

    const year = date.getFullYear().toString();
    const month =date.getMonth()+1;
    const day = date.getDate().toString();
    const fecha = new Date(Date.now() + 1800000);

    res.cookie('access', token,{
      expires: new Date(Date.now() + 1800000),//vence dentro de media hora la cookie
      //maxAge: 1800000,
      secure: process.env.NODE_ENV === 'production',
      httpOnly:true
    });

    //console.log(new Date(Date.now()+1800000 -(3600000 * 4)));



    return res.status(200).json({ data: 'que fino' });
  }else{
    return res.status(400).json({ data: 'clave o usuario incorrecto' });
  }
});

module.exports = verificationAdmin;