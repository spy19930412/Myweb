var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('tooth');
});

router.get('/tooth', function (req, res, next) {
  res.render('tooth');
});

router.get('/guide', function (req, res, next) {
  res.render('guide');
});

router.get('/order', function (req, res, next) {
  res.render('order');
});

router.get('/medical', function (req, res, next) {
  res.render('medical');
});

router.get('/doctor', function (req, res, next) {
  res.render('doctor');
});

router.get('/hospital', function (req, res, next) {
  res.render('hospital');
});

router.get('/setting', function (req, res, next) {
  res.render('setting');
});

router.get('/branch', function (req, res, next) {
  res.render('branch');
});

router.get('/skill', function (req, res, next) {
  res.render('skill');
});


router.get('/home', function (req, res, next) {
  res.render('home');
});
// router.get('/*.*', function (req, res, next) {
//   console.log(req.url);
//   next();
// });

module.exports = router;