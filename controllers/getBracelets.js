const getBracelets = require('express').Router();

const Bracelets = require('../models/createBracelets');


getBracelets.post('/', async (req, res) => {

  const search = req.body.category.toLowerCase();

  try {

    const get = await Bracelets.find({ category: search });
    return res.status(200).json({ get });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

});

module.exports = getBracelets;