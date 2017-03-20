var webpackConfig = require('./webpack.test');

module.exports = function (config) {
   var _config = {
        basePath: '',
        frameworks: ['jasmine', 'angular-cli'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-remap-istanbul'),
            require('angular-cli/plugins/karma')
        ],
        files: [
            { pattern: './src/test.ts', watched: false },
            { pattern: './config/karma-test-shim.js', watch: false }
        ],
        preprocessors: {
            // './src/test.ts': ['angular-cli']
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },
        webpackServer: {
            noInfo: true
        },
        // mime: {
        //     'text/x-typescript': ['ts','tsx']
        // },
        // remapIstanbulReporter: {
        //     reports: {
        //         html: 'coverage',
        //         lcovonly: './coverage/coverage.lcov'
        //     }
        // },
        // angularCli: {
        //     config: './angular-cli.json',
        //     environment: 'dev'
        // },
        // reporters: config.angularCli && config.angularCli.codeCoverage
        //     ? ['progress', 'karma-remap-istanbul']
        //     : ['progress'],
       reporters: ['kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    };

   config.set(_config);
};