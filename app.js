var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//tooth是网站主页面，route以此为基始
var routes = require('./routes/tooth');
var users = require('./routes/users');
var guide = require('./routes/guide');
var order =require('./routes/order');
var medical=require('./routes/medical');
var doctor = require('./routes/doctors');
var hospital = require('./routes/hospital');
var setting = require('./routes/setting');
var branch = require('./routes/branch');
var skill = require('./routes/skill');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
//下面两行为了用母版页
app.engine('html', require('ejs-mate'));
app.locals._layoutFile = 'layout.html';
app.set('view engine', 'html');



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);
app.use('/users', users);
app.use('/doctor', doctor);
app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3008);

console.log('i am running')

module.exports = app;

