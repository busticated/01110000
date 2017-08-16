const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin');
const config = require('./src/config');
const publicDir = config.get('paths.public');
const clientSrcDir = config.get('paths.clientSrc');
const ENV_PROD = 'production';
const ENV_DEV = 'development';


module.exports = function(env = process.env.NODE_ENV){
    var cfg = {
        devtool: false,
        plugins: [],
        entry: {
            bundle: path.join(__dirname, clientSrcDir, 'index.js')
        },
        output: {
            filename: '[name].js',
            publicPath: publicDir,
            path: path.join(__dirname, publicDir)
        }
    };

    if (env === ENV_PROD){
        cfg.plugins.push(new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        }));

        cfg.plugins.push(new BabiliPlugin());
    } else {
        cfg.devtool = 'inline-source-map';
    }

    return cfg;
};

module.exports.get = function(env){
    return module.exports(env);
};

module.exports.getForProduction = function(){
    return module.exports(ENV_PROD);
};

module.exports.getForDevelopment = function(){
    return module.exports(ENV_DEV);
};
