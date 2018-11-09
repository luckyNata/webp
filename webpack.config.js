module.exports = require('./config/webpack.dev');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    mode: 'development',
    watch: NODE_ENV === "development",
    entry: {
        app: './src/main.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: "/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: [
                    "babel-loader",
                    {
                        loader: "awesome-typescript-loader",
                        options: { configFileName: "tsconfig.json" }
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            },

            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            { template: './src/index.html' }
        ),
        new webpack.DefinePlugin({
           'process.env': {
               API_URL: JSON.stringify('http://localhost:5000')
           }
        }),
        new webpack.NamedModulesPlugin(),
        new FilterWarningsPlugin({
            exclude: /System.import/
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },
    devtool: NODE_ENV === "development" ? "cheap-inline-module-source-map" : false
}