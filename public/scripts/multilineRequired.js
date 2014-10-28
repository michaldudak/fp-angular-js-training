(function(angular) {
	"use strict";
	
	angular.module("app").directive("multilineRequired", function() {
		return {
			require: "ngModel",
			link: function($scope, $elem, $attrs, $modelCtrl) {
				$modelCtrl.$validators.multilineRequired = function(modelValue, viewValue) {
					// Validators must return a boolean. Returning an undefined value makes angular think we're doing an async validation.
					return !!viewValue && viewValue.indexOf("\n") !== -1;
				};
			}
		};
	});
	
}(angular));