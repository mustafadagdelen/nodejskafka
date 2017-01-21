var express = require('express'),
  config = require('./config/config');
var glob = require('glob');

var app = require('express')();
// var server = require('http').Server(app);


require('./config/express')(app, config);

var server= app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});

var io = require('socket.io')(server);
// var http = require("http").createServer(app);
// var io = require('socket.io')(http);

// var sockets = glob.sync(config.root + '/app/sockets/*.js');
// sockets.forEach(function (model) {
//   var socket = require(model);
//   socket.init(io);
// });
io.on('connection', function(socket){
  var kafkaConsumer = require('./helper/kafkaConsumer')
  kafkaConsumer.consume(socket);
});



