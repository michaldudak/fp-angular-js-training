(function(angular) {
	"use strict";

	angular.module("app").controller("shoppingCartController", function($scope, shoppingCart) {
		$scope.cartContents = shoppingCart.getProducts();

		$scope.cartTotalPrice = function() {
			return $scope.cartContents.reduce(function(totalPrice, item) {
				return totalPrice + item.quantity * item.product.price;
			}, 0);
		};
	});

}(window.angular));