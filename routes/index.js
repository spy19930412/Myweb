var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/tooth', function (req, res, next) {
  res.render('tooth');
});
router.get('/*.*', function (req, res, next) {
  console.log(req.url);
  next();
});
router.post('/login', function (req, res, next) {
  var params = req.body;
  var name = params.name;
  var password = params.password;
  if (name == '123' && password == '123') {
    res.write('success');
  } else {
    res.write('failure');
  }
  res.status(200).end();
});
module.exports = router;