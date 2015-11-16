(function(angular) {
	"use strict";

	angular.module("app").controller("orderController", function($scope, Order, $location, shoppingCart) {
		$scope.order = new Order();
		$scope.order.cart = shoppingCart.getProductsForOrder();
		$scope.order.customer = {};

		$scope.placeOrder = function() {
			if ($scope.orderForm.$invalid) {
				$scope.message = { text: "Something is wrong...", type: "error" };
			} else {
				$scope.order.$place(null, function(data) {
					shoppingCart.removeAll();
					$location.path("/orderConfirmation/" + data.id);
				});
			}
		};
	});

}(window.angular));