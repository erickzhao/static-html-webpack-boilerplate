const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssnano = require('cssnano');

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
  ],
});

