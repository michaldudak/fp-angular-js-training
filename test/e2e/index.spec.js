/* global describe, it, before, beforeEach, afterEach, expect, browser, by, element */

describe("Home page", function() {
	"use strict";

	browser.get("/");

	describe("when loaded", function() {
		it("should display a correct title", function() {
			expect(browser.getTitle()).toEqual("Angular Store");
		});
		
		it("should display three items", function() {
			var allElements = element.all(by.repeater("product in products"));
			var filtered = allElements.filter(function(element) {
				return element.isDisplayed();
			});

			filtered.then(function(obj) {
				expect(obj.length).toEqual(3);
			});
		});
	});
	
	describe("when searching for 'water'", function() {
		it("should display one item", function() {
			element(by.model("searchTerm")).sendKeys("water");

			var allElements = element.all(by.repeater("product in products"));
			var filtered = allElements.filter(function(element) {
				return element.isDisplayed();
			});

			filtered.then(function(obj) {
				expect(obj.length).toEqual(1);
			});
		});
	});
	
	describe("when clicked on 'Add to cart'", function() {
		beforeEach(function() {
			browser.get("#/");
			element(by.buttonText("Add to cart")).click();
		});

		afterEach(function() {
			// cleanup
			browser.executeScript("localStorage.clear();");
		});

		it("should change the view to #/cart", function() {
			expect(browser.getCurrentUrl()).toContain("/#/cart");
		});

		it("should display '1' near the cart icon", function() {
			expect(element(by.css(".cartItemCount")).getText()).toEqual("1");
		});

		it("should display one element in the cart grid", function() {
			expect(element.all(by.repeater("item in cartContents")).count()).toEqual(1);
		});
	});
});
