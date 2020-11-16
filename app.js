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
const IndexRoute = require('./Routes/index');
const ProductRoute = require('./Routes/products');
const User = require('./Models/Users.Model');



mongoose.connect('mongodb://localhost:nodedb',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',(error)=>{
console.log('connection error');
});


db.once('open',()=>{
console.log('databse connected');
});

//Models

<<<<<<< HEAD
const user = new User({
  name: 'Katuramu Curtis',
  password: 12345,
  email: 'curturamu@gmail.com'
});

user.save();

User.find((err, test)=>{
 if(err){
   console.log(err)
 }
 else()=>{
   console.log(test);
 }
  console.log(test)
});


// MiddleWare

app.use('/users',IndexRoute);

app.use('/products',ProductRoute);

app.use(express.json());

app.use(express.urlencoded());

app.get('/',(req, res)=>{
  res.send('I am Home page')
});

app.listen(5000, () => {
  console.log(`App listening at http://localhost:5000`);
})
=======
>>>>>>> andrew
