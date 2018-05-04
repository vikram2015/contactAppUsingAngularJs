var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var consolidate = require('consolidate');


var indexRouter = require('./server/routes/index');
var contactRouter = require('./server/routes/contactRoute');
var employeeRouter = require('./server/routes/employeeRoute');
var companyRouter = require('./server/routes/companyRoute');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// view engine setup
app.engine('html', consolidate.swig)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/employee', employeeRouter);
app.use('/company', companyRouter);
// app.use('/users', usersRouter);

//default route
app.get('*',function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


// //for DataBase Connectivity
// mongoose.connect('mongodb://localhost:27017/Contacts');
// mongoose.connection.on('connected',function (err) {
//     if(err){
//         console.log("Error occur"+err);
//     }else{
//         console.log("connected to port 27017");
//     }
// })

module.exports = app;
