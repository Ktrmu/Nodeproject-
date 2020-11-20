const express = require('express');
const { Mongoose } = require('mongoose');
const Product = require('../Models/Products.Model');
const router = express.Router();



router.post('/addnewproduct', (req, res) => {
   
  const product = new Product({
    productname: req.body.productname,
    price: req.body.price,
    ProductImage: req.body.ProductImage
    })
    try{
     const savedProduct = product.save();
     res.json({product: product._id});
    }
    catch(err){
     res.send(err);
    }
   
  });

  router.get('/getproducts', async (req, res)=> {
    try {
      const products = await Product.find();
      res.json(products);
    } 
    catch (err) {
      res.json({message: err})
    }
  });
   

router.get('/about', (req, res) => {
    res.send('I am Products About')
  });

 module.exports = router; 