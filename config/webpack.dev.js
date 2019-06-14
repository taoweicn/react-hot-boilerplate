/* eslint-disable import/no-extraneous-dependencies */

const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.common');
const config = require('./config');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    publicPath: config.dev.publicPath
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: {
          loader: 'eslint-loader',
          options: {
            emitWarning: true
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
              localsConvention: 'dashesOnly'
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devtool: config.dev.devtool,
  devServer: {
    contentBase: false, // for CopyWebpackPlugin.
    hot: true,
    port: config.dev.port,
    proxy: config.dev.proxy
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      ...config.common.htmlConfig
    }),
    new StyleLintPlugin({
      emitErrors: false
    })
  ]
});
