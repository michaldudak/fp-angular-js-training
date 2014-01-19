app.directive("tabs", function() {
	return {
		restrict: "EA",
		transclude: true,
		template: "<div class='tabs'>" +
			"<ul class='headers'>" +
			"<li ng-repeat='tab in registeredTabs' ng-class='{selected: tab === selectedTab}' ng-click='switchTab(tab)'>{{tab.title}}</li>" +
			"</ul>" +
			"<div class='content' display-element='selectedTab.content'></div>" +
			"</div>",
		replace: true,
		controller: function($scope) {
			$scope.registeredTabs = [];

			$scope.switchTab = function(tab) {
				$scope.selectedTab = tab;
			};

			this.addTab = function(title, content) {
				$scope.registeredTabs.push({ title: title, content: content });
			};
		},
		link: function(scope, element, attrs, controller, transcludeLink) {
			transcludeLink(function(clone) {
				element.append(clone);
			});

			scope.selectedTab = scope.registeredTabs[0];
		}
	};
});