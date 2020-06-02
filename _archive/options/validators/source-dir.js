const _ = require('../../utils');

const source = opts => {
  if (!_.isSet(opts.source)) {
    return 'Source directory must be supplied.';
  }
  if (!_.isDirectory(opts.source)) {
    return 'Source directory does not exist.';
  }
  return null;
};

module.exports = source;
