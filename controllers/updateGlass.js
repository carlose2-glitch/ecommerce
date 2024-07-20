const updateGlass = require('express').Router();

const update = require('../models/createGlasses');


updateGlass.post('/', async (req, res) => {

  const data = req.body;
  const id = { _id: data.id };
  const brand = data.brand;
  const description = data.description;
  const price = data.price;
  const total1 = data.total1;
  const total2 = data.total2;
  const total3 = data.total3;
  const totalq = data.totalq;

  try {

    const r = await update.findOneAndUpdate(id, {
      description: description,
      brand: brand,
      price: price,
      total1: total1,
      total2: total2,
      total3: total3,
      totalquanty: totalq,
    });
    console.log(r);
    return res.sendStatus(200);

  } catch (error) {
    return res.sendStatus(400);
  }



});

module.exports = updateGlass;