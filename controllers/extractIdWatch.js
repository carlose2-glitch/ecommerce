const extractIdWatch = require('express').Router();
const model = require('../models/createwatchs');

extractIdWatch.post('/', async (req, res) => {

  console.log(req.body.urlProduct);

  const id = { _id: req.body.urlProduct };

  try {
    const data = await model.findById(id);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = extractIdWatch;