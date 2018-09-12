const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
  	inline: true,
  	contentBase: 'src',
  	hot: true,
    open: true,
    port: 9000,
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ]
});