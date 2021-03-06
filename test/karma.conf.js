// Karma configuration
// Generated on Tue Jun 14 2016 13:39:59 GMT+0100 (BST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/ionic/release/js/ionic.bundle.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/ng-token-auth/dist/ng-token-auth.js',
      'app/bower_components/angular-cookie/angular-cookie.js',
      'app/bower_components/ngCordova/dist/ng-cordova.js',
      'app/scripts/**/*.js',
      'www/lib/ionic/js/ionic.bundle.js',
      'node_modules/moment/min/moment.min.js',
      'test/unit/*.js',
      'test/unit'
    ],
    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher"
    ],


    // list of files to exclude
    exclude: [
    ],



    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
              'karma-spec-reporter',
              'karma-chrome-launcher',
              'karma-jasmine'
    ],

    reporters: ["spec"],

    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    }
  })
}
