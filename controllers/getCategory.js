const getCategory = require('express').Router();

const categories = require('../models/categoriestext');

getCategory.post ('/', async (req, res) => {


  const category = req.body.producto;

  /* const agregate = new categories({
    shirts: [
      {
        url:string,
        marca: category,
        amount: 0,
        description: 'camisa negra'
      }
    ]
  });*/
  //await agregate.save();


  //const getProducts = await categories.find({});

  //console.log(getProducts[0].shirts[0]);
  //console.log('hola');
  return res.status(200).json({ cate:category });
});

module.exports = getCategory;