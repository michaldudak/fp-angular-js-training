(function(angular) {
	"use strict";

	angular.module("app").controller("productsController", function($scope, $location, productService, shoppingCart) {

		productService.getProducts().then(function(response) {
			$scope.products = response.data;

			$scope.visibleDetails = {};

			$scope.showDetails = function(id) {
				$scope.visibleDetails[id] = true;
			};

			$scope.hideDetails = function(id) {
				$scope.visibleDetails[id] = false;
			};

			$scope.addToCart = function(product) {
				shoppingCart.addProduct(product);
				$location.path("cart");
			};

			$scope.onRowExpanded = function() {
				window.console.log("product details expanded.");
			};
		});
	});
	
}(window.angular));