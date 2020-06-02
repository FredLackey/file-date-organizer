const _ = require('../../utils');

const overlapFolders = opts => {
  if (!_.isDirectory(opts.source)) { return null; }
  if (!_.isDirectory(opts.target)) { return null; }
  if (opts.source.toLowerCase() === opts.target.toLowerCase()) {
    return 'Source and target directories must be different.';
  }
  return null;
};

module.exports = overlapFolders;
