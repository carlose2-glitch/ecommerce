const getIntoRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let message = '';

getIntoRouter.post('/', async (req, res) => {

  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  console.log(userExist);
  if(userExist){
    //console.log(userExist);
    const answer = verificationPassword(userExist._id ,userExist.passwordHash, password, res);
    // console.log(await answer);
    return res.status(await answer).json({ message:message });
  }else{
    message = 'Correo no registrado';

    return res.status(400).json({ message: message });
  }
});

const verificationPassword = async (idUser, verificacion, password, res) => {
  // console.log('clave ' + password);
  // console.log('clave encriptada ' + verificacion);
  const trueOfalse = await bcrypt.compare(password, verificacion);
  //console.log(result);
  if(trueOfalse){
    message = 'ok';
    console.log('id del usuario',  idUser);
    console.log('verificacion', verificacion);
    const userForToken = {

      id:idUser,
    };
    // console.log('variable de entorno: ' + process.env.ACCESS_TOKEN_SECRET);
    const accesToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1d'
      });
    console.log('token: ' + accesToken);

    //console.log( new Date(Date.now() - (3600000 * 4)));
    //const date = new Date(Date.now() + ((3600000 * 24) - (3600000 * 4)));
    //console.log(date);
    res.cookie('accessToken', accesToken, {
      expires: new Date(Date.now() + ((3600000 * 24) - (3600000 * 4))),
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true
    });

    return 200;
  }else{
    message = 'contraseña incorrecta';
    return 400;
  }
};

module.exports = getIntoRouter;