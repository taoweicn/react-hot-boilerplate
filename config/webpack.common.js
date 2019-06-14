/* eslint-disable import/no-extraneous-dependencies */

const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = require('./config');
const { resolve, assetsPath } = require('./utils');

module.exports = {
  entry: {
    app: ['react-hot-loader/patch', './src/index.jsx']
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: Object.assign(
      {
        'react-dom': '@hot-loader/react-dom'
      },
      config.common.alias
    )
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            limit: 10000,
            outputPath: assetsPath('images/')
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          limit: 10000,
          outputPath: assetsPath('medias/')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            limit: 10000,
            outputPath: assetsPath('fonts/')
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: resolve(config.prod.outputPath, 'static'),
        ignore: ['.*']
      }
    ])
  ]
};
