describe("Home page", function() {

	describe("when loaded", function() {
		it("should display a correct title", function() {
			browser.get("/");
			expect(browser.getTitle()).toEqual("Angular Store");
		});
	});
});