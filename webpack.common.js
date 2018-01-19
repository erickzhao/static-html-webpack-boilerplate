const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const getNameFromDir = (dir) => {
  const lastSlash = dir.lastIndexOf('/');
  return dir.slice(lastSlash + 1);
};

const generateHTMLPlugins = () =>
  glob.sync('./src/**/*.html').map(dir =>
    new HTMLWebpackPlugin({
      filename: getNameFromDir(dir), // Output
      template: dir, // Input
    }));

module.exports = {
  node: {
    fs: 'empty',
  },
  entry: ['./src/js/app.js', './src/style/main.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['env'],
        },
      },
      {
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader', 'sass-loader']),
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.bundle.css',
      allChunks: true,
    }),
    new CopyWebpackPlugin([{
      from: './src/static/',
      to: './static/',
    }]),
    ...generateHTMLPlugins(),
  ],
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
