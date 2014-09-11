(function(angular) {
	"use strict";
	
	angular.module("app").directive("tab", function() {
		return {
			scope: true,
			restrict: "EA",
			transclude: true,
			require: ["^tabs", "tab"],
			template: "<div ng-show='visible' ng-transclude></div>",
			replace: true,
			controller: function($scope) {
				$scope.visible = false;

				this.show = function() {
					$scope.visible = true;
				};

				this.hide = function() {
					$scope.visible = false;
				}
			},
			link: function(scope, element, attrs, controllers) {
				var tabsController = controllers[0];
				var tabController = controllers[1];

				tabsController.addTab(attrs.title, tabController);
			}
		};
	});
	
}(window.angular));
