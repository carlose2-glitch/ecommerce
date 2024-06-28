const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogSchema = new Schema({

  category: String,
  product: String,
  amount: Number,
});

const modelo = mongoose.model('Products', blogSchema);

module.exports = modelo;
//const numero = 5;

/*const newProduct = new modelo({

  category:'camisa',
  product:'barcelona chemise',
  amount: 5,
});*/


/*

const saved = async () => {


  try {
    await newProduct.save();
  } catch (error) {
    console.log(error.message);
  }

};
saved();*/