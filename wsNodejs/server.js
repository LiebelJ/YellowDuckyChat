#!/usr/bin/env node
var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function (request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(8888, function () {
    console.log((new Date()) + ' Server is listening on port 8888');
});

var clients = [];
wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production 
    // applications, as it defeats all standard cross-origin protection 
    // facilities built into the protocol and the browser.  You should 
    // *always* verify the connection's origin and decide whether or not 
    // to accept it. 
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
    // put logic here to detect whether the specified origin is allowed. 
    valid_origins = ['http://localhost:4200','http://localhost:9000','http://aws.yellowducky.co',http://aws.stillz.net];
    console.log('Valid origins: ' + valid_origins);
    if (valid_origins.indexOf(origin) != -1) {
        console.log('Connection accepted from origin ' + origin);
        return true;
    }
    return false;
}

wsServer.on('request', function (request) {
    if (!originIsAllowed(request.origin)) {
        // Make sure we only accept requests from an allowed origin 
        request.reject();
        console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
        return;
    }

    var connection = request.accept('echo-protocol', request.origin);
    clients.push(connection);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function (message) {
        
        //if (message.type === 'utf8') {
        //    console.log('Received Message: ' + message.utf8Data);
        //    connection.sendUTF(message.utf8Data);
        //}
        //else if (message.type === 'binary') {
        //    console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
        //    connection.sendBytes(message.binaryData);
        //}
        console.log('Received Message: ' + message.utf8Data);
        for (var i = 0; i < clients.length; i++) {
            clients[i].sendUTF(message.utf8Data);
        };
    });
    connection.on('close', function (reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});
