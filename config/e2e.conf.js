exports.config = {
	specs: ["../test/e2e/*.spec.js"],
	baseUrl: "http://localhost:3000",
	framework: "jasmine2",
	multiCapabilities: [{
		browserName: 'firefox'
	}],
	keepAlive: true,
	noColor: false
};