const ignoreOrOverwrite = require('./ignore-or-overwrite');
const moveOrCopy        = require('./move-or-copy');
const overlapDates      = require('./overlap-dates');
const overlapFolders    = require('./overlap-folders');
const overlapFormat     = require('./overlap-format');
const sourceDir         = require('./source-dir');
const targetDir         = require('./target-dir');

module.exports = {
  ignoreOrOverwrite,
  moveOrCopy,
  overlapDates,
  overlapFolders,
  overlapFormat,
  sourceDir,
  targetDir
};
