'use strict';

var express = require('express'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

var logger = require('./src/logger');
var index = require('./src/routes/index');
var testPage = require('./src/routes/testPage');
var mochaTest=require('./src/routes/mochaTest');

//pbcourse = require('./src/routes/pbcourse');

var server = express();

server.set('views', path.join(__dirname, 'src/views'));
server.set('view engine', 'pug');

server.use(express.static(path.join(__dirname, 'public')));

server.use(logger);
server.use('/', index);
server.use('/testpage', testPage);
server.use('/mocha', mochaTest);
// server.use('pbcourse', pbcourse);

server.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (server.get('env') === 'development') {
    server.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

server.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = server;