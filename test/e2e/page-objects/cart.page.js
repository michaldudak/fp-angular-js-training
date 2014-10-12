module.exports = {
	path: "/#/cart",
	
	get: function() {
		browser.get(this.path);
	},
	
	getUrl: function() {
		return browser.getCurrentUrl();
	},
	
	getCartListing: function() {
		return element.all(by.repeater("item in cartContents"));
	}
};