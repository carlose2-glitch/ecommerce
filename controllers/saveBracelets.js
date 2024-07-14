const saveBracelets = require('express').Router();

const bracelets = require('../models/createBracelets');

saveBracelets.post('/', async (req, res) => {

  const { category, description, brand, s, m, l, xl, url1, url2, url3, price, totalquanty } = req.body;

  const newProduct = new bracelets({

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
    const r = await newProduct.save();
    console.log(r);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);

  }

});

module.exports = saveBracelets;