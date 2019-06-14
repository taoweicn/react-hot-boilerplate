const path = require('path');
const config = require('./config');

module.exports = {
  resolve(...dir) {
    return path.resolve(__dirname, '..', ...dir);
  },
  assetsPath(..._path) {
    return path.posix.join(config.common.assetsSubDirectory, ..._path);
  }
};
