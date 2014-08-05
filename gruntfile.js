module.exports = function (grunt) {
	grunt.initConfig({
		karma: {
			options: {
				// config file for both tasks
				configFile: "config/unit.conf.js"
			},
			unit: {
				options: {
					// overriding global config
					singleRun: true
				}
			},
			watch: {
				options: {
					// overriding global config
					autoWatch: true
				}
			}
		},
		protractor: {
			e2e: {
				options: {
					configFile: "config/e2e.conf.js",
					keepAlive: true, // If false, the grunt process stops when the test fails.
					noColor: false, // If true, protractor will not use colors in its output.
					args: { }
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-karma");
	grunt.loadNpmTasks("grunt-protractor-runner");
	grunt.registerTask("test", ["karma:unit", "protractor"]);
};