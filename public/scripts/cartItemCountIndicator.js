(function(angular) {
	"use strict";
	
	angular.module("app").directive("cartItemCountIndicator", function(shoppingCart) {
		return {
			scope: true,
			template: "<div class='cartItemCount'>{{itemCount}}</div>",
			replace: true,
			restrict: "EA",
			link: function(scope) {
				scope.itemCount = shoppingCart.getItemCount();

				scope.$on("cartContentsChanged", function() {
					scope.itemCount = shoppingCart.getItemCount();
				});
			}
		};
	});
	
}(window.angular));