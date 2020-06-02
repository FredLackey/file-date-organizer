const _ = require('../../utils');

const target = opts => {
  if (!_.isSet(opts.target)) {
    return 'Target directory must be supplied.';
  }
  if (!_.isDirectory(opts.target)) {
    return 'Target directory does not exist.';
  }
  return null;
};

module.exports = target;
