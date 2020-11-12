const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('I am Products Home')
  });

router.get('/about', (req, res) => {
    res.send('I am Products About')
  });

 module.exports = router; 