var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/dingcheng");

global.dbhandler=require("./database/dbhandler");
//连接到dingcheng数据库
//---------------session 模块------------------------------------
var session  = require("express-session");
//----------------自定义的路由模块----------------------
var index = require('./routes/index');
var users = require('./routes/users');
var api = require("./api/homeapi");
var mysession = require("./api/mysession");
var upsession = require("./routes/upsession");
var register = require("./routes/register");
var login = require("./routes/login");
var posts=require("./routes/posts");
//----------------自定义的路由模块----------------------




var app = express();
//引入cors
var cors =require("cors");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//---------------初始化session 模块------------------------------------
app.use(session({
  name: "kerwinNodeSessID",
  secret:"dw3243dw",
  cookie: {maxAge: 1000*3600 }, //1小时
  resave: true, //让session 自动重新设置
  saveUninitialized: true //sessionID 一开始就是设置
 }));
//---------------初始化session 模块------------------------------------




//使用cors这个模块,allow-access-control-origin:*
app.use(cors());
app.use('/', index);
app.use('/users', users);
app.use('/homeapi', api);
app.use('/posts', posts);
app.use('/register', register);
app.use('/login', login);
app.use('/mysession', mysession);
app.use('/upsession', upsession);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
