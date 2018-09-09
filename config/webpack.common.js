const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/index.jsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
            outputPath: 'static/images/'
          }
        }
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            limit: 10000,
            outputPath: 'static/fonts/'
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: path.resolve(__dirname, '../dist/static'),
      ignore: ['.*']
    }])
  ]
};
