(function(angular) {
	"use strict";

	angular.module("app").service("productService", function($http) {
		this.getProducts = function() {
			return $http.get("/products");
		};
	});
	
}(window.angular));