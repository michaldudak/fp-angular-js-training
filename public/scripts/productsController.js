(function(angular) {
	"use strict";

	angular.module("app").controller("productsController", function($scope, $location, productService, shoppingCart) {

		productService.getProducts().then(function(response) {
			$scope.products = response.data;
		});

		var visibleDetails = {};

		$scope.showDetails = function(id) {
			visibleDetails[id] = true;
		};

		$scope.hideDetails = function(id) {
			visibleDetails[id] = false;
		};

		$scope.isVisible = function(id) {
			return !!visibleDetails[id];
		};

		$scope.addToCart = function(product) {
			shoppingCart.addProduct(product);
			$location.path("cart");
		};
	});

}(window.angular));