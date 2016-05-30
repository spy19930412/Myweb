var express = require('express');
var router = express.Router();



router.get('/skill', function (req, res, next) {
  res.render('skill');
});



module.exports = router;