//server
const express = require('express');
const app = express()

app.listen(5500, () => {
  console.log(`App listening at http://localhost:5500`);
})

//Routes //Controller
app.get('/', (req, res) => {
    res.send('Hello There!')
  })

//database
const mongoose = require('mongoose');
const IndexRoute = require('./Routes/index');
const ProductRoute = require('./Routes/products');
const AuthRoute = require('./Routes/auth');
const UsersRoute = require('./Routes/users');
require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors')


mongoose.connect('mongodb://localhost:27017/test',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error',(error)=>{
console.log('connection error');
});


db.once('open',()=>{
console.log('databse connected');
});

//Models


// const user = new User({
//   name: 'Katuramu Curtis',
//   password: 12345,
//   email: 'curturamu@gmail.com'
// });

// const user = new User({
//   name: 'Katuramu Curtis',
//   password: 12345,
//   email: 'curturamu@gmail.com'
// });


// user.save();

// User.find((err, test)=>{
//  if(err){
//    console.log(err)
//  }
//   console.log(test)
// });


// MiddleWare
app.use(cors());

app.use('/user',IndexRoute);

app.use(express.json());

app.use(express.urlencoded());

app.use('/auth', AuthRoute);

app.use('/products',ProductRoute);

app.use('/documentation',express.static('public'))

app.get('/',(req, res)=>{
  res.send('I am Home page')
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:5000`);
})

