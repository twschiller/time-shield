## Time Shield

[![Build Status](https://travis-ci.org/twschiller/time-shield.svg?branch=master)](https://travis-ci.org/twschiller/time-shield)

Smarter procrastination management for Chrome.
* More effective alerts/messages
* Safe to use in incognito mode (open source, with no tracking)
* Identify patterns *(Coming soon)*

### How to build locally:

1. Install Node.js, and make sure you have the most recent version of npm, the node package manager: https://docs.npmjs.com/getting-started/installing-node

2. Install the [Grunt](http://gruntjs.com/) task runner and [Typescript Definition manager](http://definitelytyped.org/tsd/):

        npm install -g grunt-cli tsd

3. Install the dependencies and type definitions:

        npm install
        tsd install

4. Compile and bundle the extension to the `dist` directory:

        grunt build

5. Load the `dist` directory in Chrome: https://developer.chrome.com/extensions/getstarted#unpacked

### Running the Test Suite

1. Install the Typescript node execution environment and the Mocha test framework:

        npm install -g ts-node mocha

2. Run the test suite:

        npm test

### Packing the Extension

To generate a signed [CRX file](https://developer.chrome.com/extensions/crx) in the `crx` directory, use the package task:

       KEY=/path/to/key.pem grunt package

*Note: I haven't gotten this to work with a password-protected key yet.*

### Acknowledgements
* Icon: Siena Icon Pack by Jack Cai
