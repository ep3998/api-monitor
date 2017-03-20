const assert = require('assert'),
    mongoose = require('mongoose');

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const applications = require('./routes/applications');

//Connection URL
const url = 'mongodb://localhost:27017/api-monitor';
mongoose.connect(url, function(err){
    if(err){
        console.log('MongoDB connection error:', err);
    } else {
        console.log('MongoDB connection successful:', url);
    }
});

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

//Logging
app.use(logger('dev'));

//Body handling for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Headers for Cross-Origins
// app.use(function(req, res, next){
//
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
//
//     next();
// });

// Static Angular /dist route
app.use(express.static(path.join(__dirname, '../dist')));

// API Route Handling
app.use('/api/applications', applications);

// Catch-all - other routes go to index
app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
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
    res.json(err);
});

module.exports = app;

