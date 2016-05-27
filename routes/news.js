var express = require('express');
var router = express.Router();

// 增加新闻
router.get('/addNews', function(req, res, next) {
  newsDao.add(req, res, next);
});


module.exports = router;