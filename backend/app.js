'use strict';

var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function(req, res) {
  res.send({message: 'Hello world'});
});

app.listen(PORT);
console.log('Running on port: ' + PORT);
