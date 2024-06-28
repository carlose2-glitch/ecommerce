const getproducts = require('express').Router();
const schemaproducts = require('../models/createproducts');


getproducts.post('/', async (req, res) => {

  const category = req.body.category.toLowerCase();

  const get = await schemaproducts.find({ category: category });
  console.log(get);

  res.status(200).json({ get });
});

module.exports = getproducts;