app.controller("orderController", function($scope) {
	$scope.customer = {};

	$scope.placeOrder = function() {
		if ($scope.orderForm.$invalid) {
			$scope.message = { text: "Boo! Invalid input!", type: "error" };
		} else {
			var text = "Placed an order for " + $scope.customer.name + " (" + $scope.customer.email + ")";
			$scope.message = { text: text, type: "success" };
		}
	};
});