const saveDbShirtsCaps = require('express').Router();
const product = require('../models/createproducts');

saveDbShirtsCaps.post('/', async (req, res) => {

  //extraer los datos del front
  const category = req.body.category;
  const description = req.body.description;
  const brand = req.body.brand;
  const s = req.body.s;
  const m = req.body.m;
  const l = req.body.l;
  const xl = req.body.xl;
  const url1 = req.body.url1;
  const url2 = req.body.url2;
  const url3 = req.body.url3;
  const price = req.body.price;
  const totalquanty = req.body.cantidadT;
  //asignar valores al nuevo producto de la base de datos
  const newProduct = new product({
    category,
    description,
    brand,
    s,
    m,
    l,
    xl,
    url1,
    url2,
    url3,
    price,
    totalquanty,
  });

  try {
    //guardar en la base de datos
    const response = await newProduct.save();
    console.log(response);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }



});


module.exports = saveDbShirtsCaps;