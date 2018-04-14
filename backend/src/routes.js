var Router = require('express').Router;
var User = require('./service');

var router = new Router();

router.get('/', function(req, res, next) {
  var instance = new User();
  return instance
    .findUser()
    .then(function(data) {
      if (data != null) {
        return res.send(data);
      }
      return instance
        .createUser()
        .then(function(result) {
          return res.send(result);
        })
        .catch(function(e) {
          e.status = 403;
          return next(e);
        });
    })
    .catch(function(e) {
      e.status = 403;
      return next(e);
    });
});

module.exports = router;
