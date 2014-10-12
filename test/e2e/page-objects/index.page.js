module.exports = {
	get: function() {
		browser.get("/");
	},
	
	getUrl: function() {
		return browser.getCurrentUrl();
	},
	
	pageTitle: function() {
		return browser.getTitle();
	},
	
	productsList: function() {
		return element.all(by.repeater("product in products")).filter(function(element) {
			return element.isDisplayed();
		});
	},
	
	searchFor: function(term) {
		element(by.model("searchTerm")).sendKeys(term);
	},
	
	addFirstElementToCart: function() {
		element.all(by.buttonText("Add to cart")).first().click();
	},
	
	getCartItemCounterText: function() {
		return element(by.css(".cartItemCount")).getText();
	}
};