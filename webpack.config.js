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
  devtool: 'cheap-module-source-map',
  entry: './src/app/index.js',
  output: {
    filename: '[contenthash:8].js',
    crossOriginLoading: 'anonymous',
    path: path.resolve(__dirname, 'build/web'),
    chunkFilename: 'chunks/[contenthash:8].js'
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
      }
    ]
  },
  plugins: [
    new Dotenv({ safe: true, allowEmptyValues: true }),
    new CleanWebpackPlugin(),
    new SubresourceIntegrityPlugin(),
    new LoadablePlugin({
      writeToDisk: true,
      filename: '../loadable-stats.json'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      generateStatsFile: true,
      reportFilename: '../bundle-report.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/public/index.html'
    })
  ],
  devServer: {
    hot: true,
    port: 5000,
    compress: true,
    host: 'localhost',
    historyApiFallback: true,
    devMiddleware: { writeToDisk: true }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        mantine: {
          chunks: 'all',
          name: 'mantine',
          test: /[\\/]node_modules[\\/]@mantine[\\/]/
        },
        apolloclient: {
          chunks: 'all',
          name: 'apollo-client',
          test: /[\\/]node_modules[\\/]@apollo[\\/]client[\\/]/
        }
      }
    }
  }
};
