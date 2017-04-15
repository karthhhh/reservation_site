var express = require('express');
var reservation = require("./reservation.js");

var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/.content', function (req, res) {
  
})  

app.get('/api/.content', function (req, res) {
  
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})