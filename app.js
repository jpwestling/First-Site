var express = require('express');
var mongoose = require('mongoose');
var app = module.exports = express.createServer();

// connect to Mongo when the app initializes
mongoose.connect('mongodb://localhost/norum');

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});