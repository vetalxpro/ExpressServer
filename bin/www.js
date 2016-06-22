'use strict'

var server = require('../server');
var http = require('http');
var debug = require('debug')('myserver:server');
var colors=require('colors');

var port = normalizePort(process.env.PORT || '8769');
server.set('port', port);

var httpServer = http.createServer(server);

httpServer.listen(port, function() {
    console.log('Express listening on port %s in %s mode'.green, port, server.get('env'));
});
httpServer.on('error', onError);
httpServer.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }
    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is allready in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = httpServer.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}