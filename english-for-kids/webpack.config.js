const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index_bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            template: './english-for-kids/src/sass/style.css',
            filename: './english-for-kids/src/sass/style.css'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './index.html'
        })
    ]
};