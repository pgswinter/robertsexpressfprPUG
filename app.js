var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');

var expressValidator = require('express-validator');
var expressSession = require('express-session');

var mongoose = require('mongoose');
var assert = require('assert');
var fs = require('fs');

var routes = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);

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

// if('development' == app.get('env')){
  // app.use(express.errorHandler());
  // mongoose.connect('mongodb://127.0.0.1:27017/robertstore');
// }

// ********** OLD VERSION ********** 
// ********** OLD VERSION ********** 
// ********** OLD VERSION ********** 

// app.use('/users', users);

// mongoose.model('books',{
// 	title: String
// })
// mongoose.model('genres',{
//   name: String
// })

//load all files in models dir
// fs.readdirSync(__dirname + '/models').forEach(function(filename) {
//   if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
// });

// app.get('/books', function(req,res){
//   mongoose.model('books').find(function(err,books){
//     res.send(books);
//   })
// })

// app.get('/books/:name', function(req,res){
// 	mongoose.model('books').find({
//     genre: req.params.name
//   },
//     function(err,books){
// 		res.send(books);
// 	})
// })

// app.get('/books/:name', function(req,res){
//   mongoose.model('books').find({
//     genre: req.params.name
//   },
//     function(err,books){
//     mongoose.model('books').populate(books,{path:'book'},
//       function(err, books){
//         res.send(books);
//       })
//   })
// })

// app.get('/genres', function(req,res){
//   mongoose.model('genres').find(function(err,genres){
//     res.send(genres);
//   })
// })

// ********** OLD VERSION **********
// ********** OLD VERSION **********
// ********** OLD VERSION **********


// http.createServer(app).listen(app.get('port'),function(){
// 	console.log('Epxress server listening on port ' + app.get('port'))
// })
