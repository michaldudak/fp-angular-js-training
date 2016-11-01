exports.config = {
	specs: ["../test/e2e/*.spec.js"],
	baseUrl: "http://localhost:3000",
	framework: "jasmine2",
	multiCapabilities: [{
		browserName: 'chrome'
	}],
	keepAlive: true,
	noColor: false
};