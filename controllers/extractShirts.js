const extractShirts = require('express').Router();
const product = require('../models/createproducts');

extractShirts.post('/', async (req, res) => {

  const productget = req.body.category;

  try {
    const get = await product.find({ category: productget });
    res.status(200).json({ get });
  } catch (error) {
    res.status(200).json({ message: 'no se encontro producto' });
  }


});

module.exports = extractShirts;