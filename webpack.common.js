const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

console.log("common", process.env.NODE_ENV);
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {
    entry: {
        app: path.join(__dirname, './src/main.ts'),
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
                    "babel-loader", // ES6 to ES5
                    {
                        loader: "awesome-typescript-loader", // ts into js
                        options: { configFileName: "tsconfig.json" }
                    },
                    'angular2-template-loader' // insert templates inline in component
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
        new CleanWebpackPlugin('dist', {} ),
        new HtmlWebpackPlugin(
            { template: path.join(__dirname, './src/index.html') }
        )
    ]
}