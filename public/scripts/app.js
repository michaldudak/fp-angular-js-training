(function(window, angular) {

    var app = angular.module("app", ["ngRoute", "ngAnimate"]);

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
			});
	});

	window.app = app;

} (window, window.angular));