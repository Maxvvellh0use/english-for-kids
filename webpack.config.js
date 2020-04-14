const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: { main: './english-for-kids/src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            },
            //img loader
            {
                test: /\.(svg|png|jpe?g|)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: '../img/[name].[ext]',
                    },
                },
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'english-for-kids/src/sass/style.css', disable: false, allChunks: true}
        ),
        new CopyPlugin([
            { from: 'english-for-kids/src/audio', to: 'audio' },
            { from: 'english-for-kids/src/img', to: 'img' },
        ]),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './english-for-kids/index.html',
            filename: 'index.html'
        }),
    ]
};