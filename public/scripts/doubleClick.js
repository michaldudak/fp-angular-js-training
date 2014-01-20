app.directive("doubleClick", function() {
	return {
		scope: {
			handler: "&doubleClick"
		},
		link: function(scope, element) {
			element.on("dblclick", function() {
				scope.$apply(function() {
					scope.handler();
				});
			});
		}
	};
})