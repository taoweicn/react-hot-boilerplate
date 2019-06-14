/* eslint-disable import/no-extraneous-dependencies */

const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');
const config = require('./config');
const { assetsPath } = require('./utils');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: assetsPath('js/[name].[chunkhash:8].js'),
    publicPath: config.prod.publicPath
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
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
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[hash:base64:5]'
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
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'common'
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  devtool: config.prod.devtool,
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      ...config.common.htmlConfig,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].[chunkhash:8].css'),
      chunkFilename: assetsPath('css/[id].[chunkhash:8].css')
    })
  ]
});
