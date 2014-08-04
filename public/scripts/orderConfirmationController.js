(function(angular) {
	"use strict";
	
	angular.module("app").controller("orderConfirmationController", function($scope, order) {
		$scope.order = order;
	});
	
}(window.angular));