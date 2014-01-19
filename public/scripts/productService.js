app.service("productService", function($http) {
	this.getProducts = function() {
		return $http.get("/products");
	};
});