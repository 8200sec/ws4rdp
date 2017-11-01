var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(process.env.PORT || 9250, "127.0.0.1");
console.log("run in 127.0.0.1", process.env.PORT || 9250);
require('./ws4rdp')(server);