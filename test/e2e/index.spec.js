/* global describe, it, before, beforeEach, afterEach, expect, browser, by, element */

var indexPage = require("./page-objects/index.page.js");
var cartPage = require("./page-objects/cart.page.js");

describe("Home page", function() {
	"use strict";

	browser.get("/");

	describe("when loaded", function() {
		it("should display a correct title", function() {
			expect(indexPage.pageTitle()).toEqual("Angular Store");
		});
		
		it("should display three items", function() {
			expect(indexPage.productsList().count()).toEqual(3);
		});
	});
	
	describe("when searching for 'water'", function() {
		it("should display one item", function() {
			indexPage.searchFor("water");

			expect(indexPage.productsList().count()).toEqual(1);
		});
	});
	
	describe("when clicked on 'Add to cart'", function() {
		beforeEach(function() {
			indexPage.get();
			indexPage.addFirstElementToCart();
		});

		afterEach(function() {
			// cleanup
			browser.executeScript("localStorage.clear();");
		});

		it("should change the view to #/cart", function() {
			expect(browser.getCurrentUrl()).toContain(cartPage.path);
		});

		it("should display '1' near the cart icon", function() {
			expect(indexPage.getCartItemCounterText()).toEqual("1");
		});

		it("should display one element in the cart grid", function() {
			expect(cartPage.getCartListing().count()).toEqual(1);
		});
	});
});
