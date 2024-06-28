const mongoose = require('mongoose');

const { Schema } = mongoose;

const productsCreate = new Schema({ nike: Object });
const blogSchema = new Schema({

  shirts: Array,

});


const modeloCategories = mongoose.model('Category', blogSchema);

module.exports = modeloCategories;
