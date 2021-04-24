const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const sass = require('./webpack/sass');
//const { merge } = require('webpack-merge');
//const { memoryUsage, argv } = require('process');
//const webpack = require('webpack');
//const extractCSS = require('./webpack/css.extract');
const PATHS = {
  source: path.join(__dirname, './source'),
  build: path.join(__dirname, './build'),
};

/*
if (argv.env === 'development') {
    return merge([common, sass()]);
}


if (argv.env === 'production') {
    return merge([common, extractCSS()]);
}
*/

module.exports = {
  entry: PATHS.source + '/index.js',
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: PATHS.source + '/index.pug',
      filename: PATHS.build + '/index.html',
    }),
    new HtmlWebpackPlugin({
      template: PATHS.source + '/about.pug',
      filename: PATHS.build + '/pages/about.html',
    }),
    new HtmlWebpackPlugin({
      template: PATHS.source + '/contacts.pug',
      filename: PATHS.build + '/pages/contacts.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
    
};




