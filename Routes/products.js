const express = require('express');
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
router.get('/products', (req, res) => {
    res.send('I am Products')
});  

router.get('/about', (req, res) => {
    res.send('I am Products About')
  });

 module.exports = router; 