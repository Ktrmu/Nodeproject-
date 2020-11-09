const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:curtisdb',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',(error)=>{
console.log('connection error');
});

db.once('open',()=>{
console.log('databse connected');
});

const app = express()

app.get('/', (req, res) => {
  res.send('Hello There!')
})

app.listen(5000, () => {
  console.log(`App listening at http://localhost:5000`);
})