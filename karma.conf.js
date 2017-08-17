module.exports = function(cfg){
    cfg.set({
        basePath: '',
        frameworks: ['mocha', 'sinon', 'chai'],
        files: ['src/client/**/*.test.js'],
        exclude: ['.git', 'node_modules'],
        preprocessors: {
            'src/client/**/*.test.js': ['webpack', 'sourcemap']
        },
        webpackPort: 9877,
        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                alias: {
                    'react': 'preact-compat',
                    'react-dom': 'preact-compat',
                    'create-react-class': 'preact-compat/lib/create-react-class'
                }
            }
        },
        plugins: [
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-sinon',
            'karma-chai',
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-chrome-launcher'
        ],
        reporters: ['mocha'],
        mochaReporter: { showDiff: true },
        port: 9876,
        transports: ['polling', 'websocket'],
        colors: true,
        logLevel: cfg.LOG_INFO,
        autoWatch: true,
        autoWatchBatchDelay: 1000,
        browsers: ['Chrome'],
        browserNoActivityTimeout: 60000,
        singleRun: false
    });
};
