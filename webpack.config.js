var webpack = require('webpack');
var path = require('path');

var SRC_DIR = path.resolve(__dirname + '/js')
var DEST_DIR = path.resolve(__dirname + '/build')

module.exports = {
  entry: [
    SRC_DIR + '/views/main.js',
    SRC_DIR + '/index.js'
  ],
  output: {
    filename: '[name].js',
    path: DEST_DIR + '/js'
  },
  watch: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js']
  },
  module: {
    loaders: [
      {
      	test: /\.scss$/,
      	// style-loader - creates style nodes from JS strings
      	// css-loader - translates CSS into CommonJS (i.e. @import -> import, url() -> require() etc)
      	// sass-loader - compiles SASS to CSS
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  }
};