exports.config = {
	specs: ["../test/e2e/*.spec.js"],
	baseUrl: "http://localhost:3000",
	multiCapabilities: [{
		browserName: 'firefox'
	}],
	keepAlive: true,
	noColor: false
};