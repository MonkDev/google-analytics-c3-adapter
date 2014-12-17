// Karma configuration
// Generated on Mon Dec 15 2014 22:10:47 GMT+0000 (UTC)

module.exports = function (config) {
  'use strict';

  config.set({

    // base path that will be used to resolve all patterns
    basePath: '../',

    // frameworks to use
    frameworks: ['mocha', 'chai'],

    // test results reporter to use
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
