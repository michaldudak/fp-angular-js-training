(function(angular) {
	"use strict";

	angular.module("app").factory("Order", function($resource) {
		return $resource("/orders/:id", null, {
			place: { method: "POST", isArray: false }
		});
	});
	
}(window.angular));