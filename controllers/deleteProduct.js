const deleteProduct = require('express').Router();
const model = require('../models/createproducts');
deleteProduct.post('/', async (req, res) => {
  console.log(req.body.id);

  const id = {
    _id: req.body.id
  };

  try {
    const response = await model.findOneAndDelete(id);
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error:error.message });
  }

});

module.exports = deleteProduct;