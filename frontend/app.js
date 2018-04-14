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
      return res.send(data.data);
    })
    .catch(function(e) {
      return res.send(e.response);
    });
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  res.status(err.status).send({ status: err.status, message: err.message });
  next();
});

app.listen(PORT);
console.log('Running on port: ' + PORT);
