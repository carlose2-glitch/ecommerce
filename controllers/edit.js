const edit = require('express').Router();

const schemaproducts = require('../models/createproducts');

edit.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {

    const extract = await schemaproducts.findById(id);
    return res.status(200).json({ extract });

  } catch (error) {
    console.log(error.message);
    return res.sendStatus(400);
  }




});

module.exports = edit;