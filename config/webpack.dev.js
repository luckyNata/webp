const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source',
    output: {
        path: 'dist',
        publicPath: '/',
        filename: 'bundle.js'
    }
})