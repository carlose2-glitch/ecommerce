const saveWatch = require('express').Router();
const newwatch = require('../models/createwatchs');

saveWatch.post('/', async (req, res) => {
  //extraer los datos del front
  const category = req.body.category;
  const description = req.body.description;
  const brand = req.body.brand;
  const mm38 = req.body.mm38;
  const mm39 = req.body.mm39;
  const mm40 = req.body.mm40;
  const mm41 = req.body.mm41;
  const url1 = req.body.url1;
  const url2 = req.body.url2;
  const url3 = req.body.url3;
  const price = req.body.price;
  const totalquanty = req.body.amountt;
  //crear nuevo producto
  const newProduct = new newwatch({

    category,
    description,
    brand,
    mm38,
    mm39,
    mm40,
    mm41,
    url1,
    url2,
    url3,
    price,
    totalquanty,

  });

  //guardar los datos
  try {
    const r = await newProduct.save();
    console.log(r);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
    return res.sendStatus(400);
  }


});

module.exports = saveWatch;