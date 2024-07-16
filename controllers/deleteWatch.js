const deleteWatch = require('express').Router();
const model = require('../models/createGlasses');


deleteWatch.post('/', async (req, res) => {

  const id = {
    _id : req.body.id,
  };

  try {

    const r = await model.findOneAndDelete(id);
    console.log(r);
    return res.sendStatus(200);

  } catch (error) {
    return res.sendStatus(400);
  }


});

module.exports = deleteWatch;