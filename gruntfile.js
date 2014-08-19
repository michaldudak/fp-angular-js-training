module.exports = function (grunt) {
	grunt.initConfig({
		karma: {
			options: {
				// config file for both tasks
				configFile: "config/unit.conf.js"
			},
			dev: {
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
			},
			ci: {
				options: {
					singleRun: true,
					reporters: ["junit"],
					junitReporter: {
						outputFile: "test/results/test-results-unit.xml"
					}
				}
			}
		},
		protractor: {
			dev: {
				options: {
					configFile: "config/e2e.conf.js"
				},
			},
			ci: {
				options: {
					configFile: "config/e2e-ci.conf.js"
				},
			}
		}
	});

	grunt.loadNpmTasks("grunt-karma");
	grunt.loadNpmTasks("grunt-protractor-runner");
	grunt.registerTask("test", ["karma:dev", "protractor:dev"]);
};