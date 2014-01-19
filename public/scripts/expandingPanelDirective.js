app.directive("expandingPanel", function() {
	return {
		template: "<div ng-show='expanded' ng-transclude></div>",
		transclude: true,
		scope: {
			expanded: "=",
			onExpand: "&",
			onCollapse: "&"
		},
		replace: true,
		link: function(scope) {
			scope.$watch("expanded", function(newValue, oldValue) {
				if (newValue === oldValue) {
					return;
				}

				if (newValue) {
					scope.onExpand();
				} else {
					scope.onCollapse();
				}
			});
		}
	};
});