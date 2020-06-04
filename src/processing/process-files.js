const _     = require('../utils');
const path  = require('path');

const toConsole = (opts, message) => {
  if (!opts.console) { return; }
  console.info(message);
}

const processFiles = (opts) => {

  let limitReached = false;
  if (!_.isNumber(opts.count)) { 
    opts.count = 0;
  }

  opts._files.forEach(file => {
    
    if (opts.limit > 0 && opts.count >= opts.limit) {
      if (!limitReached) { 
        toConsole(opts, `File limit reached ${opts.limit}.  Stopping...`);
        limitReached = true;
      }
      return;
    }

    toConsole(opts, '     ');
    toConsole(opts, `> ${file.source}`);
    toConsole(opts, `  ${file.target}`);

    const targetSize = _.getFileSize(file.target);
    const sourceSize = (targetSize >= 0 || opts.console !== false) ? _.getFileSize(file.source) : -1;

    if (targetSize >= 0 && sourceSize === targetSize) {
      if (opts.move === true) {
        if (!_.deleteFile(file.source)) {
          file.error = 'Original file not cleaned up.';
          toConsole(opts, `  - ${file.error}`);
        } else {
          toConsole(opts, '  Exists... ignoring (cleaned up source file).');
        }
      } else {
        toConsole(opts, '  Exists... ignoring.');
      }
      return;
    }

    if (targetSize >= 0 && !opts.overwrite) {
      file.error = 'Overwrite not allowed';
      toConsole(opts, `  - ${file.error}`);
      return;
    }
    
    if (!_.createPath(path.dirname(file.target))) {
      file.error = 'Cannot create directory.';
      toConsole(opts, `  - ${file.error}`);
      return;      
    }    

    opts.count += 1;
    file.start = new Date();
    toConsole(opts, `  Start:   ${file.start.toLocaleString()} (size: ${sourceSize})`);

    if (!_.copyFile(file.source, file.target)) {
      file.error = exists ? 'File not overwritten.' : 'File not copied.';
      toConsole(opts, `  - ${file.error}`);
      return;
    } else {
      file.copied = new Date();
    }
    
    if (opts.move === true) {
      toConsole(opts, `  Moved:   ${file.copied.toLocaleString()}`);
    } else {
      toConsole(opts, `  Copied:  ${file.copied.toLocaleString()}`);
    }
  
    if (opts.move === true) {
      if (!_.deleteFile(file.source)) {
        file.error = 'Original file not deleted.';
        toConsole(opts, `  - ${file.error}`);
        return;
      } else {
        file.deleted = new Date();
      }
    }

    const end = opts.move ? file.deleted : file.copied;
    toConsole(opts, `  Time:    ${_.getDuration(file.start, end)}`);
  });
  
  const errCount = opts._files.filter(x => (x && x.source && x.error)).length;
  if (errCount > 0) {
    return [`Failed files: ${errCount}`];
  }
  
  return [];
};

module.exports = processFiles;
