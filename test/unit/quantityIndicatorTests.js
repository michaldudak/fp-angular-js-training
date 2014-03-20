describe("QuantityIndicator directive tests", function() {

	var $rootScope;
	var $compile;
 
	beforeEach(module('app'));
 
	beforeEach(inject(function(_$rootScope_, _$compile_) {
		$rootScope = _$rootScope_;
		$compile = _$compile_;
	}));
 
	it('should set its width to a proper value', function() {

		var markup = "<div quantity-indicator value='42' max-value='100'></div>";
		var element = $(markup);
		var scope = $rootScope.$new();

		$compile(element)(scope);
		scope.$digest();

		expect(element.find(".ratio").length).toBe(1);
		expect(element.find(".ratio").css("width")).toBe("42%");
	});
})