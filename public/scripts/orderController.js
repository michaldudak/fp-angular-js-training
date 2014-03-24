app.controller("orderController", function($scope) {
	$scope.customer = {};

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
		}
	};
});