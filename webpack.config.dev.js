const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
  	contentBase: 'src',
  	watchContentBase: true,
  	hot: true,
    open: true,
    port: 9000,
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ]
});