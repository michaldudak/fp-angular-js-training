app.directive("displayElement", function() {
	return {
		scope: {
			toDisplay: "=displayElement"
		},
		link: function(scope, element) {

			scope.$watch("toDisplay", function(value) {
				element.empty().append(value);
			});
		}
	};
});