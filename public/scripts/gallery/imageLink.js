(function(angular) {
	"use strict";

	angular.module("gallery").directive("imageLink", function() {
		return {
			require: "^gallery",
			link: function($scope, $elem, $attrs, galleryController) {
				$elem.click(function () {
					$scope.$apply(function() {
						galleryController.showImage($attrs.imageLink);
					});
				});
			}
		};
	});
	
}(window.angular));