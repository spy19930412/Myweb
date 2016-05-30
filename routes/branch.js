var express = require('express');
var router = express.Router();



router.get('/branch', function (req, res, next) {
  res.render('branch');
});



module.exports = router;