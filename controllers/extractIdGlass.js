const extractIdGlass = require('express').Router();

const find = require('../models/createGlasses');

extractIdGlass.post('/', async (req, res) => {

  const id ={ _id:req.body.urlProduct };

  try {
    const data = await find.findById(id);
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

});


module.exports = extractIdGlass;