describe("Shopping Cart", function() {
	"use strict";
	
	var shoppingCart;
	
	beforeEach(function() {
		module("app");
		inject(function(_shoppingCart_) {
			shoppingCart = _shoppingCart_;
			
			// Services are singletons, so we have to reset their state between tests.
			shoppingCart.removeAll();
		});		
	});
	
	describe("getItemCount", function() {
		describe("when no items were added to the cart", function() {			
			it("should return 0", function() {
				expect(shoppingCart.getItemCount()).toBe(0);
			});
		});
		
		describe("when three unique products were added to the cart", function() {
			it("should return 3", function() {
				shoppingCart.addProduct({ id: 1 });
				shoppingCart.addProduct({ id: 2 });
				shoppingCart.addProduct({ id: 3 });
				
				expect(shoppingCart.getItemCount()).toBe(3);
			});
		});
		
		describe("when three products of the same type were added to the cart", function() {
			it("should return 3", function() {
				shoppingCart.addProduct({ id: 1 });
				shoppingCart.addProduct({ id: 1 });
				shoppingCart.addProduct({ id: 1 });
				
				expect(shoppingCart.getItemCount()).toBe(3);
			});
		});
	});
});