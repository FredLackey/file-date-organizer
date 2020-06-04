const os = require('os');
const _ = require('../utils');

module.exports = {

  source      : { type: 'string', isPath: true, name: 'Source Directory' },
  target      : { type: 'string', isPath: true, name: 'Desination Directory' },

  recursive   : { type: 'boolean', default: true, name: 'Locate files recursively' },
  overwrite   : { type: 'boolean', default: false, name: 'Overwrite existing target files' },
  ignore      : { type: 'boolean', default: false, name: 'Ignore existing target files' },
  copy        : { type: 'boolean', default: false, name: 'Copy the files' },
  move        : { type: 'boolean', default: false, name: 'Move the files' },

  useName     : { type: 'boolean', default: false, name: 'Extract date from file name' },
  useCreated  : { type: 'boolean', default: false, name: 'Use created date for target folder name' },
  useModified : { type: 'boolean', default: false, name: 'Use modified date for target folder name' },

  addYear     : { type: 'boolean', default: true, name: 'Target folder name includes file year' },
  addMonth    : { type: 'boolean', default: true, name: 'Target folder name includes file month' },
  addDay      : { type: 'boolean', default: true, name: 'Target folder name includes file day' },
  addHour     : { type: 'boolean', default: false, name: 'Target folder name includes file hour' },
  addMinute   : { type: 'boolean', default: false, name: 'Target folder name includes file minute' },
  addSecond   : { type: 'boolean', default: false, name: 'Target folder name includes file second' },

  console     : { type: 'boolean', default: false, name: 'Log activity to console' },

  limit       : { type: 'number', default: -1, name: 'Number of files to process' },
  allowFuture : { type: 'boolean', default: false, name: 'Allow file names with date in future' },
};
