(function(angular) {
	"use strict";

	var app = angular.module("app", ["ngRoute", "ngResource", "ngMessages", "gallery"]);

	app.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: "/views/products.html",
				controller: "productsController"
			})
			.when("/cart", {
				templateUrl: "/views/shoppingCart.html",
				controller: "shoppingCartController"
			})
			.when("/order", {
				templateUrl: "/views/order.html",
				controller: "orderController"
			})
			.when("/orderConfirmation/:id", {
				templateUrl: "/views/orderConfirmation.html",
				controller: "orderConfirmationController",
				resolve: {
					order: function(Order, $route) {
						return Order.get({ id: $route.current.params.id });
					}
				}
			});
	});

} (window.angular));