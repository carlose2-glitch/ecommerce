const categories = require('express').Router();
const CategoriesStatus = require('../models/categoriestext');


categories.post('/', async (req, res) => {


  /*const category = new CategoriesStatus({
    category: req.body.name,
  });*/
  //const query = await CategoriesStatus.find({});
  //console.log(query[0]._id.toJSON());
  //const compare = await CategoriesStatus.findById(query[0]._id);
  //await CategoriesStatus.findByIdAndUpdate(query[0].id,{ category: req.body.name });
  //await category.save();


  return res.sendStatus(200);
});

module.exports = categories;