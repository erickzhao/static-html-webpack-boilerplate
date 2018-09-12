const merge = require('webpack-merge');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
    port: process.env.PORT || 9000,
    host: process.env.HOST || '0.0.0.0',
  },
});
