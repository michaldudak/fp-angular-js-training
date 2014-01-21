module.exports = function (config) {
	config.set({
		basePath: "..",
		singleRun: false,
		autoWatch: true,

		frameworks: ["jasmine"],
		
		browsers: ["Chrome"],

		files: [
			"public/scripts/libs/jquery-2.0.3.js",
			"public/scripts/libs/angular.js",
			"public/scripts/libs/angular-route.js",
			"public/scripts/libs/angular-animate.js",
			"public/scripts/libs/angular-mocks.js",
			"public/scripts/*.js",
			"test/unit/*.js"
		]
	});
};