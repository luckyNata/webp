const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode: 'development',

    entry: {
        app: './src/main.ts'
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
        new HtmlWebpackPlugin(
            { template: './src/index.html' }
        )
    ]
}