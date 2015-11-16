exports.config = {
	specs: ["../test/e2e/*.spec.js"],
	baseUrl: "http://localhost:3000",
	framework: "jasmine2",
	multiCapabilities: [{
		browserName: 'firefox'
	}],
	onPrepare: function() {
		// The require statement must be down here, since jasmine-reporters@1.0
		// needs jasmine to be in the global and protractor does not guarantee
		// this until inside the onPrepare function.
		require("jasmine-reporters");
		jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter("test/results", true, true, "test-results-e2e", true));
	}
};