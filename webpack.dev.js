const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const path = require('path');

console.log("@@@Dev@@@",  process.env.NODE_ENV);
module.exports = webpackMerge(commonConfig, {
    mode: process.env.NODE_ENV,
    devtool: 'cheap-inline-module-source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                API_URL: JSON.stringify('http://localhost:8000')
            }
        }),
        new webpack.NamedModulesPlugin()
        ]
})