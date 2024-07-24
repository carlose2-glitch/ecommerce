const extractGlass = require('express').Router();
const glass = require('../models/createGlasses');

extractGlass.post('/', async (req, res) => {

  const category = req.body.category;


  try {

    const get = await glass.find({ category: category });
    return res.status(200).json({ get });

  } catch (error) {
    return res.status(200).json({ message: 'no se pudo' });
  }

});

module.exports = extractGlass;