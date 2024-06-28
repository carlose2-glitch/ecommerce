const edit = require('express').Router();

const schemaproducts = require('../models/createproducts');

edit.get('/:id', async (req, res) => {
  console.log('hola');
  const id = req.params.id;
  const extract = await schemaproducts.findById(id);

  return res.status(200).json({ extract });
});

module.exports = edit;