describe("Shopping cart controller tests", function() {

	var $rootScope;
	var $controller;

	var $scope;
 
	beforeEach(module('app'));
 
	beforeEach(inject(function(_$rootScope_, _$controller_) {
		$rootScope = _$rootScope_;
		$controller = _$controller_;
	}));
 
	it('should calculate cart price', function() {
		$scope = $rootScope.$new();
		
		$controller('shoppingCartController', { $scope: $scope });
		
		$scope.cartContents = [
			{
				quantity: 4,
				product: {
					price: 10
				}
			},
			{
				quantity: 1,
				product: {
					price: 2
				}
			}
		];
		
		var actual = $scope.cartTotalPrice();

		expect(actual).toBe(42);
	});
	
})