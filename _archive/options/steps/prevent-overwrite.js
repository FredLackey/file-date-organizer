const _ = require('../../utils');

const preventOverwrite = opts => {

  if (opts._files.length < 1 || opts.ignore === true || opts.overwrite === true) { 
    return []; 
  }

  const errors = [];

  const exists = opts._files.filter(x => (x && x.target && _.isFile(x.target)));
  if (exists.length === 1) {
    errors.push(`Target file exists without overwrite or ignore is not selected: ${exists[0].target}`);
  }
  if (exists.length > 1) {
    errors.push(`Multiple target files exists without overwrite or ignore being selcted (${exists.length} failed).`);
  }
  
  return errors;
};

module.exports = preventOverwrite;
