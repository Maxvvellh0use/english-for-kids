const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader'],
          },
        ),
      },
      // img loader
      {
        test: /\.(svg|png|jpe?g|)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '../img/[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(
      { filename: 'src/sass/style.css', disable: false, allChunks: true },
    ),
    new CopyPlugin([
      { from: 'src/audio', to: 'audio' },
      { from: 'src/img', to: 'img' },
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
};
