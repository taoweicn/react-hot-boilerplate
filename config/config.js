const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  common: {
    outputPath: 'dist',
    assetsSubDirectory: 'static',
    alias: {
      '@': resolve('src')
    },
    htmlConfig: {
      title: 'App',
      template: 'index.html',
      filename: 'index.html',
      favicon: undefined
    }
  },
  dev: {
    publicPath: '/',
    port: 3000,
    devtool: 'inline-source-map',
    proxy: {}
  },
  prod: {
    publicPath: '/',
    devtool: 'source-map'
  }
};
