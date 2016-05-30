var express = require('express');
var router = express.Router();



router.get('/guide', function (req, res, next) {
  res.render('guide');
});



module.exports = router;