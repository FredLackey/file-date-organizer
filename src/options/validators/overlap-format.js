const _ = require('../../utils');

const overlapFormat = opts => {
  if (opts.addMonth === true && opts.addYear !== true) {
    return 'Cannot add month without year.';
  }
  if (opts.addDay === true && opts.addMonth !== true) {
    return 'Cannot add day without month.';
  }
  if (opts.addHour === true && opts.addDay !== true) {
    return 'Cannot add hour without day.';
  }
  if (opts.addMinute === true && opts.addHour !== true) {
    return 'Cannot add minutes without hours.';
  }
  if (opts.addSecond === true && opts.addMinute !== true) {
    return 'Cannot add seconds without minutes.';
  }
  return null;
};

module.exports = overlapFormat;
