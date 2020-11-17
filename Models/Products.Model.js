const { schema } = require("./Users.Model");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema( {
    productname: String,
    price: Number,
    ProductImage: Buffer
  });

const Product = mongoose.model('product',ProductSchema);

module.exports = Product;