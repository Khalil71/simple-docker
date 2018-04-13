'use strict';

var express = require('express');
var axios = require('axios');

// Constants
var PORT = 9090;

// App
var app = express();
app.get('/', function(req, res) {
  return axios
    .get('http://lb-backend')
    .then(function(data) {
      return res.send(data.data.data);
    })
    .catch(function(e) {
      return res.send(e.response);
    });
});

app.listen(PORT);
console.log('Running on port: ' + PORT);
