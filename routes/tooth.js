var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('tooth');
});

router.get('/tooth', function (req, res, next) {
  res.render('tooth');
});

router.get('/doctor', function (req, res, next) {
  res.render('doctor');
});

router.get('/branch', function (req, res, next) {
  res.render('branch');
});

router.get('/home', function (req, res, next) {
  res.render('home');
});
// router.get('/*.*', function (req, res, next) {
//   console.log(req.url);
//   next();
// });

module.exports = router;