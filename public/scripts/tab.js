app.directive("tab", function() {
	return {
		restrict: "EA",
		transclude: true,
		require: "^tabs",
		link: function(scope, element, attrs, tabsController, transcludeLink) {
			transcludeLink(function(clone) {
				tabsController.addTab(attrs.title, clone);
			});
			
			element.remove();
		}
	};
});