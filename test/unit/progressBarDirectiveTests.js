describe("ProgressBar directive tests", function() {
	"use strict";

	var $rootScope;
	var $compile;

	beforeEach(module('app'));

	beforeEach(inject(function(_$rootScope_, _$compile_) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));

	it('should set its width to a proper value', function() {

		var markup = "<progress-bar value='42' max-value='100'></progress-bar>";
		var element = $(markup);
		var scope = $rootScope.$new();

		$compile(element)(scope);
		scope.$digest();

		expect(element.find(".fill").length).toBe(1);
		expect(element.find(".fill").css("width")).toBe("42%");
	});
});