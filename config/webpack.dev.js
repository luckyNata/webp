const webpack = require('webpack');
const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-inline-module-source-map',
    watch: true,
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/", // for assets
        filename: "bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                API_URL: JSON.stringify('http://localhost:5000')
            }
        }),
        new webpack.NamedModulesPlugin()
        ]
})