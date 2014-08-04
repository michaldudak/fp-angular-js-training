(function(angular) {
	"use strict";

	angular.module("gallery").directive("image", function() {
		return {
			require: "^gallery",
			link: function($scope, $elem, $attrs, galleryController) {
				galleryController.registerImage($elem);
			}
		};
	});
	
}(window.angular));