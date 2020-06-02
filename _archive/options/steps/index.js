const cleanDirs         = require('./clean-dirs');
const findSourceFiles   = require('./find-source-files');
const loadArrays        = require('./load-arrays');
const preventOverwrite  = require('./prevent-overwrite');
const processFiles      = require('./process-files');
const setBackups        = require('./set-backups');
const setDefaults       = require('./set-defaults');
const setTargets        = require('./set-targets');
const splitArrays       = require('./split-arrays');
const unknowns          = require('./unknowns');
const validate          = require('./validate');
const verifyFormats     = require('./verify-formats');

module.exports = {
  cleanDirs,
  findSourceFiles,
  loadArrays,
  preventOverwrite,
  processFiles,
  setBackups,
  setDefaults,
  setTargets,
  splitArrays,
  unknowns,
  validate,
  verifyFormats
};
