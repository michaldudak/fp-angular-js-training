(function(angular) {

	angular.module("app").directive("tabs", function() {
		return {
			restrict: "EA",
			transclude: true,
			template: "<div class='tabs'>" +
				"<ul class='headers'>" +
				"<li ng-repeat='tab in registeredTabs' ng-class='{selected: tab.index === selectedTab}' ng-click='switchTab(tab.index)'>{{tab.title}}</li>" +
				"</ul>" +
				"<div class='content' ng-transclude></div>" +
				"</div>",
			replace: true,
			controller: function($scope) {
				$scope.registeredTabs = [];

				$scope.switchTab = function(tab) {
					$scope.selectedTab = tab;
				};

				this.addTab = function(title, content) {
					var index = $scope.registeredTabs.length;
					$scope.registeredTabs.push({ title: title, index: index });
					return index;
				};
			},
			link: function(scope, element, attrs, controller, transcludeLink) {
				scope.selectedTab = 0;
			}
		};
	});

}(window.angular));