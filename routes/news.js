var express = require('express');
var router = express.Router();

router.get('/news', function (req, res, next) {
  res.render('news');
});

// 增加新闻
router.get('/addNews', function(req, res, next) {
  newsDao.add(req, res, next);
});


module.exports = router;