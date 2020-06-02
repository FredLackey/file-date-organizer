const _     = require('../utils');
const path  = require('path');

const processFiles = (opts) => {
  
  opts._files.forEach(file => {
    
    const exists = _.isFile(file.target);
    
    if (exists && opts.ignore) {
      return;
    }    
    if (exists && !opts.overwrite) {
      file.error = 'Overwrite not allowed';
      return;
    } 
    
    if (!_.createPath(path.dirname(file.target))) {
      file.error = 'Cannot create directory.';
      return;      
    }    
    if (!_.copyFile(file.source, file.target)) {
      file.error = exists ? 'File not overwritten.' : 'File not copied.';
      return;
    }
    
    if (opts.move !== true) {
      return;
    }

    if (!_.deleteFile(file.source)) {
      file.error = 'Original file not deleted.';
    }
  });
  
  const errCount = opts._files.filter(x => (x && x.source && x.error)).length;
  if (errCount > 0) {
    return [`Failed files: ${errCount}`];
  }
  
  return [];
};

module.exports = processFiles;
