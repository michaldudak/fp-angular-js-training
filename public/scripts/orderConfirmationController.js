(function(angular) {
	"use strict";
	
	angular.module("app").controller("orderConfirmationController", function($scope, order) {
		// The whole order-retreiving logic is placed in app.js (in the /orderConfirmation route definition).
		$scope.order = order;
	});
	
}(window.angular));