"use strict";

/**
  * Module dependencies.
  */
var express = require('express');
var http = require('http');
var path = require('path');

var products = require('./routes/products');
var orders = require('./routes/orders');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// routing
app.get('/products', products.getAll);
app.get('/orders', orders.getAll);
app.get('/orders/:id', orders.get);
app.post('/orders', orders.create);

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
