// dao/doctorDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./doctorSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code:'1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

module.exports = {
  add: function (req, res, next) {
    pool.getConnection(function(err, connection) {
      // 获取前台页面传过来的参数
      var param = req.query || req.params;

      // 建立连接，向表中插入值
      // 'INSERT INTO doctor(doctorId, doctorTitle, doctorName, doctorSpec, doctorDetail) VALUES(0,?,?,?,?)'
      connection.query($sql.insert, [param.doctorTitle, param.doctorName, param.doctorSpec, param.doctorDetail], function(err, result) {
        if(result) {
          result = {
            code: 200,
            msg:'增加成功'
          };    
        }

        // 以json形式，把操作结果返回给前台页面
        jsonWrite(res, result);

        // 释放连接 
        connection.release();
      });
    });
  },
  delete: function (req, res, next) {
    // delete by doctorId
    pool.getConnection(function(err, connection) {
      var doctorId = +req.query.doctorId;
      connection.query($sql.delete, doctorId, function(err, result) {
        if(result.affectedRows > 0) {
          result = {
            code: 200,
            msg:'删除成功'
          };
        } else {
          result = void 0;
        }
        jsonWrite(res, result);
        connection.release();
      });
    });
  },
  update: function (req, res, next) {
    // update by doctorId
    var param = req.body;
    if(param.doctorTitle == null || param.doctorName == null || param.doctorSpec == null|| param.doctorDetail == null|| param.doctorImg == null|| param.doctorId == null) {
      jsonWrite(res, undefined);
      return;
    }

    pool.getConnection(function(err, connection) {
      connection.query($sql.update, [param.doctorTitle, param.doctorName, param.doctorSpec, param.doctorDetail, param.doctorImg +param.doctorId], function(err, result) {
        // 使用页面进行跳转提示
        if(result.affectedRows > 0) {
          res.render('suc', {
            result: result
          }); // 第二个参数可以直接在jade中使用
        } else {
          res.render('fail',  {
            result: result
          });
        }

        connection.release();
      });
    });

  },
  queryBydoctorId: function (req, res, next) {
    var doctorId = +req.query.doctorId; // 为了拼凑正确的sql语句，这里要转下整数
    pool.getConnection(function(err, connection) {
      connection.query($sql.queryBydoctorId, doctorId, function(err, result) {
        jsonWrite(res, result);
        connection.release();

      });
    });
  },
  queryAll: function (req, res, next) {
    pool.getConnection(function(err, connection) {
      connection.query($sql.queryAll, function(err, result) {
        jsonWrite(res, result);
        connection.release();
      });
    });
  }

};