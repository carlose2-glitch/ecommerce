const editWatch = require('express').Router();
const getWatch = require('../models/createwatchs');

editWatch.get('/:id?', async (req, res) => {

  const id = req.params.id;

  try {

    const get = await getWatch.findById(id);
    return res.status(200).json({ get });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = editWatch;