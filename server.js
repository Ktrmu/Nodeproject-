// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3001;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// console.log('hello from back end javascript');
// console.log("Curtis");

const express = require('express');
const hostname = 'localhost';
const port = 3000;
const server = express();

server.listen(port, hostname, () =>{
  console.log(`server running at http://${hostname}:${port}`)
});

server.get('/',function(req, res){
  res.json({username:'Curtis', email:'curturamu@SpeechGrammarList.com'})
});
server.get('/Product',function (req, res){
  res.json(
 {
  name:"shorts",
  price:"45000ugx",
  ProductImage:"https://images.unsplash.com/photo-1597169428688-254b4223ba7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
})
});