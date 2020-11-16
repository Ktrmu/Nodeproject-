//server
const express = require('express');
const app = express()

app.listen(5000, () => {
  console.log(`App listening at http://localhost:5000`);
})

//Routes //Controller
app.get('/', (req, res) => {
    res.send('Hello There!')
  })

//database
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:curtisdb',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',(error)=>{
console.log('connection error');
});

db.once('open',()=>{
console.log('databse connected');
});

//Models

