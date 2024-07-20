const editGlass = require('express').Router();

const schemaGlass = require('../models/createGlasses');
editGlass.get('/:id', async (req, res) => {

  const id = req.params.id;

  try {
    const get = await schemaGlass.findById(id);
    return res.status(200).json({ get });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});


module.exports = editGlass;