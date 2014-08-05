#Angular JS Training
This application is used for Angular JS training in [Future Processing](http://www.future-processing.com).

##Setup
To run the project, you need to have node.js installed on your machine. Head over to http://nodejs.org/ to get the latest version.

To install the dependencies, open the console, enter the project's directory and type in `npm install`. This will fetch the libraries from the [NPM](https://www.npmjs.org/) repository Then you can start the application by `node app`.

##Running the server
Executing `node app` will start up the web server on local port 3000. Open your browser and type in http:\\localhost:3000 in the address bar to see the site.

##Running the tests
Before first run, you need to install the Protractor's Webdriver. To do this, go to node_modules\grunt-protractor-runner\node_modules\protractor\bin inside of the project's directory and type in `node webdriver-manager update`.

The easiest way to run the tests is to type in `grunt test`. This task runs both Karma unit tests and Protractor E2E tests (make sure the application server is running before executing E2E tests).
You may also run the suites separately: `grunt karma:unit` starts up the unit tests and `grunt protractor` launches end to end tests.

What's more, unit tests may also be started in a watch mode. Executing `grunt karma:watch` starts up Karma and watches for file changes. If either source code or test is changed, all the tests are run immediately.