var express = require('express');
var router = express.Router();



router.get('/hospital', function (req, res, next) {
  res.render('hospital');
});



module.exports = router;