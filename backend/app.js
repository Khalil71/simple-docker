'use strict';

var express = require('express');
var mongoose = require('mongoose');

var routes = require('./src/routes');

// Constants
var PORT = 8080;

// App
var app = express();

mongoose.connect('mongodb://test2:test2@ds055742.mlab.com:55742/docker', function mongoConnect() {
  console.log('mongoose connection success');
});

app.use('/', routes);

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
