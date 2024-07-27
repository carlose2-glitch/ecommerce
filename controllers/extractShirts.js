const extractShirts = require('express').Router();
const product = require('../models/createproducts');

extractShirts.post('/', async (req, res) => {

  const productget = req.body.category;

  try {
    const get = await product.find({ category: productget });
    return res.status(200).json({ get });
  } catch (error) {
    return res.status(400).json({ message: 'no se encontro producto' });
  }
});

module.exports = extractShirts;