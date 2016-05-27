var express = require('express');
var router = express.Router();

var doctorDao = require('../dao/doctorDao');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/addDoctor', function(req, res, next) {
  doctorDao.add(req, res, next);
});


router.get('/queryAll', function(req, res, next) {
  doctorDao.queryAll(req, res, next);
});

router.get('/query', function(req, res, next) {
  doctorDao.queryById(req, res, next);
});

router.get('/deleteDoctor', function(req, res, next) {
  doctorDao.delete(req, res, next);
});

router.post('/updateDoctor', function(req, res, next) {
  doctorDao.update(req, res, next);
});

module.exports = router;
