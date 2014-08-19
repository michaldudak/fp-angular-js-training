/* global describe, it, before, beforeEach, afterEach, expect, browser, by, element */

var page = require("./page-objects/index.page.js");

describe("Home page", function() {
	"use strict";

	browser.get("/");

	describe("when loaded", function() {
		it("should display a correct title", function() {
			expect(page.pageTitle()).toEqual("Angular Store");
		});
		
		it("should display three items", function() {
			page.productsList().then(function(obj) {
				expect(obj.length).toEqual(3);
			});
		});
	});
	
	describe("when searching for 'water'", function() {
		it("should display one item", function() {
			page.searchFor("water");

			page.productsList().then(function(obj) {
				expect(obj.length).toEqual(1);
			});
		});
	});
	
	describe("when clicked on 'Add to cart'", function() {
		beforeEach(function() {
			page.get();
			page.addFirstElementToCart();
		});

		afterEach(function() {
			// cleanup
			browser.executeScript("localStorage.clear();");
		});

		it("should change the view to #/cart", function() {
			expect(page.getUrl()).toContain("/#/cart");
		});

		it("should display '1' near the cart icon", function() {
			expect(element(by.css(".cartItemCount")).getText()).toEqual("1");
		});

		it("should display one element in the cart grid", function() {
			expect(element.all(by.repeater("item in cartContents")).count()).toEqual(1);
		});
	});
});
