const fs = require('fs');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { SubresourceIntegrityPlugin } = require('webpack-subresource-integrity');

const alias = {};
const jsonConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'jsconfig.json')).toString());

if (jsonConfig?.compilerOptions?.paths) {
  const aliases = Object.entries(jsonConfig.compilerOptions.paths);

  aliases.forEach(([key, [value]]) => {
    alias[key] = `${path.resolve(__dirname, value)}/`;
  });
}

module.exports = {
  devtool: 'source-map',
  entry: './src/app/index.js',
  output: {
    filename: '[contenthash:8].js',
    crossOriginLoading: 'anonymous',
    path: path.resolve(__dirname, 'build/web'),
    chunkFilename: 'static/[contenthash:8].chunk.js'
  },
  resolve: {
    alias,
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][contenthash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new SubresourceIntegrityPlugin(),
    new LoadablePlugin({
      writeToDisk: true,
      filename: '../loadable-stats.json'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: '../bundle-report.html'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: __dirname + '/src/public/index.html'
    })
  ],
  devServer: {
    hot: true,
    port: 5000,
    compress: true,
    host: 'localhost',
    historyApiFallback: true
  }
};
