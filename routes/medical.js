var express = require('express');
var router = express.Router();



router.get('/medical', function (req, res, next) {
  res.render('medical');
});



module.exports = router;