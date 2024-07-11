const getWatch = require('express').Router();
const watchsGet = require('../models/createwatchs');

getWatch.post('/', async (req, res) => {

  const search = req.body.category.toLowerCase();

  try {
    const get = await watchsGet.find({ category: search });
    console.log(get);
    return res.status(200).json({ get });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

});

module.exports = getWatch;