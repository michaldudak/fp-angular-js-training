"use strict";

var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser')

var products = require('./routes/products');
var orders = require('./routes/orders');

var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(router);
app.use(express.static(path.join(__dirname, 'public')));

// routing
router.get('/products', products.getAll);
router.get('/orders', orders.getAll);
router.get('/orders/:id', orders.get);
router.post('/orders', orders.create);

var port = app.get('port');
http.createServer(app).listen(port, function() {
	console.log('Angular Store server listening on port ' + port);
});
