module.exports = function (grunt) {
	grunt.initConfig({
		
		karma: {
			unit: {
				configFile: "config/unit.conf.js"
			},
			e2e: {
				configFile: "config/e2e.conf.js"
			}
		}
	});


	grunt.loadNpmTasks("grunt-karma");
};