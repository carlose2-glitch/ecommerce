const updateWatch = require('express').Router();

const update = require('../models/createwatchs');

updateWatch.post('/', async(req, res) => {

  const id = { _id: req.body.id };
  const brand = req.body.brand;
  const description = req.body.description;
  const price = req.body.price;
  const mm38 = req.body.mm38;
  const mm39 = req.body.mm39;
  const mm40 = req.body.mm40;
  const mm41 = req.body.mm41;
  const totalquanty = req.body.t;


  try {

    const r = await update.findOneAndUpdate(id,{
      description:description,
      brand: brand,
      price: price,
      mm38:mm38,
      mm39:mm39,
      mm40:mm40,
      mm41:mm41,
      totalquanty:totalquanty,
    });
    console.log(r);
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }

});

module.exports = updateWatch;