var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var SRC_DIR = path.resolve(__dirname + '/js');
var DEST_DIR = path.resolve(__dirname + '/build');


module.exports = {
  entry: {
    main: [
      SRC_DIR + '/views/Base.js',
      SRC_DIR + '/index.js',
      __dirname + '/scss/main.scss'
    ],
    vendor: [
      'underscore',
      'tether',
      'bootstrap',
      'backbone'
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: DEST_DIR
  },
  watch: true,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules']
  },
  plugins: [
    new ExtractTextPlugin('/css/[name].css')
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        })
      },
      {
      	test: /\.scss$/,
      	// style-loader - creates style nodes from JS strings
      	// css-loader - translates CSS into CommonJS (i.e. @import -> import, url() -> require() etc)
      	// sass-loader - compiles SASS to CSS
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract([
          'css-loader',
          'sass-loader'
        ])
      },
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  }
};