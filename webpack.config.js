const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//html-webpack-plugin to inject js to body and create index.html
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})


const config = {
    entry: './client/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: '/\.js$/', loader: 'babel-loader', exclude: '/node_modules/' },
            { 
                test: '/\.jsx$/',
                exclude: '/(node_modules|bower_components)/', 
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    devServer: {
        contentBase: './dist'
    }
};

module.exports = config;