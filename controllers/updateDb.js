const updateDb = require('express').Router();
const update = require('../models/createproducts');

updateDb.post('/', async (req, res) => {
  console.log(req.body.id);
  const id ={ _id:req.body.id };
  const description = req.body.description;
  const price = req.body.price;
  const amount = req.body.amount;


  try {
    const response = await update.findOneAndUpdate(id, { description:description, price:price, amount:amount });
    console.log(response);
    return res.status(200).json('ok');
  } catch (error) {
    console.log(error);
    console.log(error.message);
    return res.status(400).json('very bad');
  }


} );

module.exports = updateDb;