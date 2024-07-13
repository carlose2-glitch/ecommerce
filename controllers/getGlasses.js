const getGlasses = require('express').Router();
const getProductsGlasses = require('../models/createGlasses');

getGlasses.post('/', async (req, res) => {

  const search = req.body.category.toLowerCase();

  try {
    const get = await getProductsGlasses.find({ category: search });
    return res.status(200).json({ get });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }


});

module.exports = getGlasses;