module.exports = {
  common: {
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
    devtool: 'source-map',
    outputPath: 'dist'
  }
};
