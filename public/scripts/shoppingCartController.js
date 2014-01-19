app.controller("shoppingCartController", function($scope, shoppingCart) {
	$scope.cartContents = shoppingCart.getProducts();
});