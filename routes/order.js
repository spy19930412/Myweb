var express = require('express');
var router = express.Router();

router.get('/order', function (req, res, next) {
  res.render('order');
});



module.exports = router;