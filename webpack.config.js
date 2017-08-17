const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./src/config');
const shellHTML = require('./src/client/shell');
const publicDir = config.get('paths.public');
const clientSrcDir = config.get('paths.clientSrc');
const ENV_PROD = 'production';
const ENV_DEV = 'development';
const ENV_ANALYSIS = 'analysis';


module.exports = function(env = process.env.NODE_ENV){
    var cfg = {
        devtool: false,
        plugins: [],
        entry: {
            bundle: path.join(__dirname, clientSrcDir, 'index.js'),
            styles: path.join(__dirname, clientSrcDir, '/styles/main.scss')
        },
        output: {
            filename: '[name].js',
            publicPath: publicDir,
            path: path.join(__dirname, publicDir)
        },
        resolve: {
            alias: {
                'react': 'preact-compat',
                'react-dom': 'preact-compat',
                'create-react-class': 'preact-compat/lib/create-react-class'
            }
        },
        module: {
            rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'sass-loader' }
                    ]
                })
            }]
        }
    };

    if (env === ENV_PROD || env === ENV_ANALYSIS){
        cfg.plugins.push(new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }));

        cfg.plugins.push(new BabiliPlugin());

        if (env === ENV_ANALYSIS){
            cfg.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerPort: 8888,
                openAnalyzer: true,
                generateStatsFile: true,
                statsFilename: 'stats.json'
            }));
        }
    } else {
        cfg.devtool = 'inline-source-map';
    }

    cfg.plugins.push(new CopyPlugin([
        { from: path.join(clientSrcDir, 'static'), to: './' }
    ]));

    cfg.plugins.push(new ExtractTextPlugin({ filename: '[name].css' }));

    cfg.plugins.push(new HtmlPlugin({
        inject: false,
        filename: 'shell.html',
        templateContent: shellHTML({
            js: path.join('/', publicDir, 'bundle.js'),
            css: path.join('/', publicDir, 'styles.css'),
            favicon: path.join('/', publicDir, 'favicon.ico'),
            title: config.get('name')
        })
    }));

    cfg.plugins.push(new WorkboxPlugin({
        globDirectory: path.join(__dirname, publicDir),
        globPatterns: ['**/*.{html,js,css,ico}'],
        globIgnores: ['styles.js'], // TODO (mirande): https://github.com/webpack/webpack/issues/1967
        swSrc: path.join(clientSrcDir, 'service-worker.js'),
        swDest: path.join(publicDir, 'sw.js')
    }));

    return cfg;
};

module.exports.get = function(env){
    return module.exports(env);
};

module.exports.getForProduction = function(){
    return module.exports(ENV_PROD);
};

module.exports.getForAnalysis = function(){
    return module.exports(ENV_ANALYSIS);
};

module.exports.getForDevelopment = function(){
    return module.exports(ENV_DEV);
};
