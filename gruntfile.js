module.exports = function (grunt) {
	grunt.initConfig({
		karma: {
			unit: {
				configFile: "config/unit.conf.js"
			}
		}
	});

	grunt.loadNpmTasks("grunt-karma");
};