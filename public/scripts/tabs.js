(function(angular) {
	"use strict";

	angular.module("app").directive("tabs", function() {
		return {
			restrict: "EA",
			transclude: true,
			template: "<div class='tabs'>" +
				"<ul>" +
				"<li ng-repeat='tab in registeredTabs' ng-class='{selected: tab.index === selectedTab}' ng-click='switchTab(tab)'>{{tab.title}}</li>" +
				"</ul>" +
				"<div ng-transclude></div>" +
				"</div>",
			replace: true,
			scope: {},
			controller: function($scope) {
				$scope.registeredTabs = [];

				$scope.switchTab = function(tabToShow) {
					for (var i = 0; i < $scope.registeredTabs.length; i++) {
						$scope.registeredTabs[i].controller.hide();
					}

					tabToShow.controller.show();
					$scope.selectedTab = tabToShow.index;
				};

				this.addTab = function(title, controller) {
					var index = $scope.registeredTabs.length;
					$scope.registeredTabs.push({ title: title, index: index, controller: controller });
				};
			},
			link: function(scope) {
				scope.switchTab(scope.registeredTabs[0]);
			}
		};
	});

}(window.angular));
