const extractWatch = require('express').Router();

const watch = require('../models/createwatchs');

extractWatch.post('/', async (req, res) => {

  const category = req.body.category;

  try {
    const get = await watch.find({ category: category });
    return res.status(200).json({ get });

  } catch (error) {
    return res.status(200).json({ message: 'no se pudo' });
  }



});

module.exports = extractWatch;