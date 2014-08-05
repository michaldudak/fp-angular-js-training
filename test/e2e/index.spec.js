describe("Home page", function() {

	describe("when loaded", function() {
		it("should display a correct title", function() {
			browser.get("/");
			expect(browser.getTitle()).toEqual("Angular Store");
		});
		
		it("should display three items (made of 6 elements)", function() {
			expect(element.all(by.repeater("product in products")).count()).toEqual(6);
		});
	});
	
	describe("when searching for 'water'", function() {
		it("should display one item", function() {
			element(by.model("searchTerm")).sendKeys("water");
			expect(element.all(by.repeater("product in products")).count()).toEqual(2);
		});
	});
	
	describe("when clicked on 'Add to cart'", function() {
		it("should change the view to #/cart", function() {
			element(by.buttonText("Add to cart")).click();
			expect(browser.getLocationAbsUrl()).toEqual("http://localhost:3000/#/cart");
		});
	});
});