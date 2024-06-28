const usersRouter = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');
//const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
//ruta para crear usuario
usersRouter.post('/', async (request, response) => {

  const { name, lastName, email, password } = request.body;

  const userExist = await User.findOne({ email });

  if(!userExist){
    console.log('sisssasss');

    const saltRounds = 10;

    const passwordHash = await bcrypt.hash(password, saltRounds);


    console.log(userExist);

    console.log(password);
    console.log(passwordHash);

    const newUser = new User({
      name,
      lastName,
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: savedUser.email, // list of receivers
      subject: 'CARRASCO STORE', // Subject line
      html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
      .main{
        width: 100%;
        height: 100vh;
        text-align: center;
      }
  
  </style>
      </head>
      <body>
      <div class="main">
      <h1>Bienvenido a CARRASCO STORE</h1>
      <img src="https://drive.google.com/uc?export=download&id=1G2molbKYKfcXi3e7LswIUspka8jD-Xil" style="width: 50%; text-align: center;" alt="imagen">
      <p style="padding: 1rem; font-weight: bold;">Su cuenta se ha creado satisfactoriamente</p>
      <a href="http://localhost:3003/" style="font-weight: bold; color: white; background-color: black; border-radius: 0.5rem; padding: 1rem; text-decoration: none;">Visita nuestra tienda</a>
      </div>
      </body>
       </html>
     `,
    });
    return response.sendStatus(201);
  }else{
    return response.status(400).json({ message:'El correo ya se encuetra registrado' });
  }


});

module.exports = usersRouter;