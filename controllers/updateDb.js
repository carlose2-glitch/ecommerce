const updateDb = require('express').Router();
const update = require('../models/createproducts');

updateDb.post('/', async (req, res) => {
  console.log(req.body);
  const id ={ _id:req.body.id };
  const description = req.body.description;
  const price = req.body.price;
  const brand = req.body.brand;
  const s = req.body.s;
  const m = req.body.m;
  const l = req.body.l;
  const xl = req.body.xl;
  const t = req.body.t;


  try {
    const response = await update.findOneAndUpdate(id, { description:description, brand:brand, s:s, m:m, l:l, xl:xl, price:price, totalquanty:t });
    console.log(response);
    return res.status(200).json('ok');
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return res.status(400).json('very bad');
  }


} );

module.exports = updateDb;