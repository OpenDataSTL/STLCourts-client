// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: './',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angularjs-toaster/toaster.js',
      'bower_components/angular-ui-select/dist/select.js',
      'bower_components/moment/moment.js',
      'bower_components/leaflet/dist/leaflet-src.js',
      'bower_components/angular-simple-logger/dist/angular-simple-logger.js',
      'bower_components/angular-moment/angular-moment.js',
      'bower_components/lodash/lodash.js',
      'bower_components/Autolinker.js/dist/Autolinker.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/moment-timezone/builds/moment-timezone-with-data-2012-2022.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/vendor/ui-leaflet.js',
      'app/vendor/jcs-auto-validate.min.js',
      'app/scripts/**/*.js',
      'test/spec/**/*.js'
    ],

    preprocessors: {
      'app/scripts/**/*.js': ['coverage']
    },

    reporters: [
      'spec',
      'coverage'
    ],

    specReporter: {
      maxLogLines: 10,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: true,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: false // print the time elapsed for each spec
    },

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    browsers: [
      "PhantomJS"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
