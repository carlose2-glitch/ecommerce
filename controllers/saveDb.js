const saveDb = require('express').Router();
const product = require('../models/createproducts');

saveDb.post('/', async (req, res) => {


  const category = req.body.cate;
  const brandbrand = req.body.brand;
  const description = req.body.de;
  const size = req.body.t;
  const price = req.body.p;
  const amount = req.body.can;
  const url1 = req.body.url1;
  const url1delete = req.body.url1delete;
  const url2 = req.body.url2;
  const url2delete = req.body.url2delete;
  const url3 = req.body.url3;
  const url3delete = req.body.url3delete;

  const newProduct = new product({
    category,
    brandbrand,
    description,
    size,
    price,
    amount,
    url1,
    url1delete,
    url2,
    url2delete,
    url3,
    url3delete,
  });

  try {

    const response = await newProduct.save();
    console.log('hola');
    console.log(response);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }



});


module.exports = saveDb;