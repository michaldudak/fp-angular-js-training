(function(angular) {
	"use strict";

	angular.module("app").directive("cartItemCounter", function(shoppingCart) {
		return {
			scope: true,
			template: "<div class='cartItemCounter'>{{itemCount}}</div>",
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