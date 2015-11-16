"use strict";

var NOT_FOUND = 404;
var OK = 200;
var CREATED = 201;

var orders = {};

exports.get = function(req, res) {
	var id = req.params.id;

	if (!(id in orders)) {
		res.send(NOT_FOUND);
		return;
	}

	res.status(OK).send(orders[id]);
};

exports.getAll = function(req, res) {
	res.status(OK).send(orders);
};

exports.create = function(req, res) {
	var id = Math.floor(Math.random() * 10000);
	var order = req.body;
	order.id = id;
	orders[id] = order;

	res.location("/orders/" + id);
	res.status(CREATED).send(order);
};