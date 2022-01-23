const { resolve } = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.config');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
});
