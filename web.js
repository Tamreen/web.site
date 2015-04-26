

var express = require("express");
var http = require('http');

var app = express();
var port = 80;

// Serve the static files.
app.use(express.static('public'));

// Create the server.
http.createServer(app).listen(port);

console.log("App active on localhost:" + port);