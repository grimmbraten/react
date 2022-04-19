const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~utils': path.resolve(__dirname, 'src/utils/'),
      '~public': path.resolve(__dirname, 'src/public/'),
      '~config': path.resolve(__dirname, 'src/config/'),
      '~routes': path.resolve(__dirname, 'src/routes/'),
      '~hooks': path.resolve(__dirname, 'src/app/hooks/'),
      '~views': path.resolve(__dirname, 'src/app/views/'),
      '~contexts': path.resolve(__dirname, 'src/app/contexts/'),
      '~components': path.resolve(__dirname, 'src/app/components/'),
      '~queries': path.resolve(__dirname, 'src/app/apollo/queries/'),
      '~mutations': path.resolve(__dirname, 'src/app/apollo/mutations/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: __dirname + '/src/public/index.html'
    })
  ]
};
