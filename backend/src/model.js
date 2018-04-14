var mongoose = require('mongoose');

var usersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    reqired: true
  },
  lastName: {
    type: String,
    reqired: true
  },
  age: {
    type: Number,
    reqired: true
  }
});

module.exports = mongoose.model('Users', usersSchema);
