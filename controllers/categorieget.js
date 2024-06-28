const categorieget = require('express').Router();

const categoriestext = require('../models/categoriestext');


categorieget.get('/', async (req, res) => {

  const query = await categoriestext.find({});

  return res.status(200).json({ data: query });
});


module.exports = categorieget;