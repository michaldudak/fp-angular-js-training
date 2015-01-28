(function(angular) {
	"use strict";
	
	angular.module("app").filter("itemCount", function() {
		return function(count) {
			switch (count) {
				case 0:
					return "Not available";
					
				case 1:
					return "One item left!";
					
				default:
					return count + " items"
			}
		}
	
	});
	
}(window.angular));