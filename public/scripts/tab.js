(function(angular) {
	"use strict";
	
	angular.module("app").directive("tab", function() {
		return {
			scope: true,
			restrict: "EA",
			transclude: true,
			require: "^tabs",
			template: "<div ng-show='isTabVisible()' ng-transclude></div>",
			replace: true,
			link: function(scope, element, attrs, tabsController) {
				var tabIndex = tabsController.addTab(attrs.title);

				scope.isTabVisible = function() {
					return scope.selectedTab === tabIndex;
				};
			}
		};
	});
	
}(window.angular));