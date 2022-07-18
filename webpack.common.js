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
  entry: './src/app/index.js',
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
        test: /\.(jpe?g|png|gif|webp|svg|otf|eot|ttf|woff2?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: true,
              outputPath: 'assets',
              publicPath: '/static/assets/',
              name: 'assets/[name]-[contenthash:8].[ext]'
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
      filename: './../reports/loadable-stats.json'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      generateStatsFile: true,
      reportFilename: './../reports/cache-groups.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + '/src/public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        mantine: {
          chunks: 'all',
          name: 'cache/mantine',
          test: /[\\/]node_modules[\\/]@mantine[\\/]/
        },
        apolloclient: {
          chunks: 'all',
          name: 'cache/apollo-client',
          test: /[\\/]node_modules[\\/]@apollo[\\/]client[\\/]/
        }
      }
    }
  }
};