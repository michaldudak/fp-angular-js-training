(function(angular) {
	"use strict";
	
	angular.module("app").directive("multilineRequired", function() {
		return {
			require: "ngModel",
			link: function($scope, $elem, $attrs, $modelCtrl) {
				$modelCtrl.$validators.multilineRequired = function(modelValue, viewValue) {
					// Validators MUST return a boolean. Returning an undefined value makes angular think we're doing an async validation.
					// Usually the validators pass when and empty value is provided (so this can be changed by adding the 'required'
					//   validator to the input control.
					return viewValue === undefined || viewValue === null || viewValue === "" || viewValue.indexOf("\n") !== -1;
				};
			}
		};
	});
	
}(window.angular));