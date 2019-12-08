const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  plugins: [
    new HTMLWebpackPlugin({template: './dist/index.html'}),
    new CleanWebpackPlugin({template: './dist/index.html'})
  ],
  module: {
    rules: {
      tests: /\.(s)*css/,
      use: ['style-loader', 'css-loader','sass-loader']
    }
  }, 
  devtool: 'inline-source-map',
  output: {
    path: path(__dir__, 'dist'),
    filename: 'bundle.js'
  }
}