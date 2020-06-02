const _ = require('../../utils');

const ignoreOrOverwrite = opts => {
  if (opts.ignore === true && opts.overwrite === true) {
    return 'Both ignore and overwrite cannot be supplied together.';
  }
  return null;
};

module.exports = ignoreOrOverwrite;
