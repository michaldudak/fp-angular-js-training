module.exports = function (config) {
	config.set({
		basePath: "..",
		singleRun: false,
		autoWatch: true,

		frameworks: ["jasmine"],
		
		browsers: ["Chrome", "PhantomJS", "Firefox"],

		files: [
			"public/scripts/libs/jquery.js",
			"public/scripts/libs/angular.js",
			"public/scripts/libs/angular-route.js",
			"public/scripts/libs/angular-mocks.js",
			"public/scripts/gallery/module.js",
			"public/scripts/gallery/*.js",
			"public/scripts/*.js",
			"test/unit/*.js"
		]
	});
};