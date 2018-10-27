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
    port: process.env.PORT || 9000,
    host: process.env.HOST || 'localhost',
  },
  plugins: [
  	new webpack.HotModuleReplacementPlugin()
  ]
});
