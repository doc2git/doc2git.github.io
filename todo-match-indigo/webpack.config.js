var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:  './main.js',
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                use:  'babel-loader'
            },
            {
                test: /\.vue$/,
                use:  'vue-loader'
            },
            {
                test: /\.(png|jpg|jpeg|svg|ttf|woff2|eot|eot2)/,
                use: 'url-loader?limit=8192'
            }
        ]
    }
}
