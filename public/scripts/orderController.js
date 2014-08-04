(function(angular) {
	"use strict";
	
	angular.module("app").controller("orderController", function($scope, Order, $location, shoppingCart) {
		$scope.order = new Order();
		$scope.order.cart = shoppingCart.getProductsForOrder();
		$scope.order.customer = {};

		$scope.placeOrder = function() {
			if ($scope.orderForm.$invalid) {
				for (var inputName in $scope.orderForm) {
					if ($scope.orderForm.hasOwnProperty(inputName) && $scope.orderForm[inputName].$dirty === false) {
						$scope.orderForm[inputName].$setViewValue($scope.orderForm[inputName].$viewValue);
					}
				}

				$scope.message = { text: "Something is wrong...", type: "error" };
			} else {
				var text = "please wait...";
				$scope.message = { text: text, type: "success" };
				$scope.order.$place(null, function(data) {
					shoppingCart.removeAll();
					$location.path("/orderConfirmation/" + data.id);
				});
			}
		};
	});
	
}(window.angular));