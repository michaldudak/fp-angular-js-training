app.controller("orderController", function($scope) {
	$scope.customer = {};

	$scope.placeOrder = function() {
		if ($scope.orderForm.$invalid) {
			alert("INVALID!");
		} else {
			alert("Placed an order for " + $scope.customer.name + " (" + $scope.customer.email + ")");
		}
	};
});