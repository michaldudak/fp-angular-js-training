app.controller("productsController", function($scope, productService, shoppingCart) {

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
		};

		$scope.onRowExpanded = function() {
			console.log("product details expanded.");
		};
	});
});