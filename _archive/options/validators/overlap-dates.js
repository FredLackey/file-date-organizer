const _ = require('../../utils');

const overlapDates = opts => {
  if (opts.useCreated === true && opts.useModified === true) {
    return 'Both the created and modified dates cannot be used together.';
  }
  if (opts.useName !== true && opts.useCreated !== true && opts.useModified !== true) {
    return 'Date to use was not indicated.';
  }
  return null;
};

module.exports = overlapDates;
