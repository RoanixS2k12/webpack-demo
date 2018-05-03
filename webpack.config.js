const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output : {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.html$/,
                use : [ { loader: "html-loader", options: { minimize: true } }]
            },
            {
                test: /\.scss$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        // Babel transpilation 
                        loader : "babel-loader" 
                    }
                ]
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor: {
                    chunks: 'initial',
                    test: path.resolve(__dirname, 'node_modules'),
                    name: 'vendors',
                    enforce: true,
                },
            }, 
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}