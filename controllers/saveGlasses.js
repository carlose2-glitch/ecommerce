const saveGlasses = require('express').Router();

const modelGlasses = require('../models/createGlasses');


saveGlasses.post('/', async (req, res) => {

  const category = req.body.category;
  const description = req.body.description;
  const brandandmodel = req.body.brandandmodel;
  const width1 = req.body.width1;
  const bridge1 = req.body.bridge1;
  const sideburns1 = req.body.sideburns1;
  const total1 = req.body.total1;
  const width2 = req.body.width2;
  const bridge2 = req.body.bridge2;
  const sideburns2 = req.body.sideburns2;
  const total2 = req.body.total2;
  const width3 = req.body.width3;
  const bridge3 = req.body.bridge3;
  const sideburns3 = req.body.sideburns3;
  const total3 = req.body.total3;
  const price = req.body.price;
  const amountt = req.body.amountt;
  const url1 = req.body.url1;
  const url2 = req.body.url2;
  const url3 = req.body.url3;

  const newProduct = new modelGlasses({
    category,
    description,
    brandandmodel,
    width1,
    bridge1,
    sideburns1,
    total1,
    width2,
    bridge2,
    sideburns2,
    total2,
    width3,
    bridge3,
    sideburns3,
    total3,
    price,
    amountt,
    url1,
    url2,
    url3,

  });

  try {
    const r = await newProduct.save();
    console.log(r);
    return res.status(200).json({ r });

  } catch (error) {
    return res.status(400).json({ error: error.message });
  }


});

module.exports = saveGlasses;