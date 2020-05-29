const _ = require('../../utils');

const moveOrCopy = opts => {
  if (opts.move === true && opts.copy === true) {
    return 'Both move and copy cannot be supplied together.';
  }
  if (opts.move !== true && opts.copy !== true) {
    return 'Please indiciate move or copy.';
  }
  return null;
};

module.exports = moveOrCopy;
