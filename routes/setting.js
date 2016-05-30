var express = require('express');
var router = express.Router();



router.get('/setting', function (req, res, next) {
  res.render('setting');
});



module.exports = router;