'use strict';

var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function(req, res) {
  res.send({
    data: { message: 'This is the message', status: 200 },
    data2: "This shouldn't be sent to the frontend"
  });
});

app.listen(PORT);
console.log('Running on port: ' + PORT);
