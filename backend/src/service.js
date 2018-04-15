var Users = require('./model');

function GetData() {}

GetData.prototype.findUser = function() {
  return Users.findOne({ firstName: 'Jhon', lastName: 'Doe', age: 34 })
    .then(function(res) {
      return res;
    })
    .catch(function() {
      return { message: 'Cannot find user' };
    });
};

GetData.prototype.createUser = function() {
  var user = new Users({
    firstName: 'Jhon',
    lastName: 'Doe',
    age: 34
  });
  return user
    .save()
    .then(function(res) {
      return res;
    })
    .catch(function() {
      return { message: 'Cannot create user' };
    });
};

module.exports = GetData;
