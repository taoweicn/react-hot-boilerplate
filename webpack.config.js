const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/app.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  // 开启webpack dev server
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader?modules'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.jsx$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: path.resolve(__dirname, './app'),
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            // 在开发的时候才启用HMR和Catch Error
            env: {
              development: {
                presets: ['react-hmre']
              }
            }
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'scaffold'
    })
  ]
};
