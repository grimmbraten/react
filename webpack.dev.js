const path = require('path');
const common = require('./webpack.common.js');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: '[name].js',
    crossOriginLoading: 'anonymous',
    chunkFilename: 'chunks/[name].js',
    path: path.resolve(__dirname, 'build/web')
  },
  devServer: {
    hot: true,
    port: 5000,
    host: 'localhost',
    historyApiFallback: true,
    devMiddleware: { writeToDisk: true }
  }
};
