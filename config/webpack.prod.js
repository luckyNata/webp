const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "bundle.js"
    },

    optimization: {
        noEmitOnErrors: true
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false,
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi],
        }),
    ]
})