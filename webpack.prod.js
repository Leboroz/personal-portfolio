const { resolve } = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: resolve(__dirname, 'dist'),
  },
});
