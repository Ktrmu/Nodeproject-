const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(
        {
         name:"shorts",
         price:"45000ugx",
         ProductImage:"https://images.unsplash.com/photo-1597169428688-254b4223ba7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
       })
  });


 module.exports = router; 