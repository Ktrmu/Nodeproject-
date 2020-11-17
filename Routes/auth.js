const express = require('express');
const User = require('../Models/Users.Model');
const router = express.Router();

router.post('/register', (req, res) => {
    const user = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
    })
    try{
     const savedUser = user.save();
     res.json({user: user._id});
    }
    catch(err){
     res.send(err);
    }
   
  });

router.post('/login', (req, res) => {
    res.send('Logged In')
  });

  module.exports = router;