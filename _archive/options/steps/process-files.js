const _     = require('../../utils');
const path  = require('path');

const processFiles = (opts) => {
  
  opts._files.forEach(file => {
    
    if (!_.createPath(path.dirname(file.target))) {
      file.error = 'Cannot create directory.';
      return;      
    }
    
    if (_.isFile(file.target)) {
      if (!opts.overwrite) {
        file.error = 'Overwrite not allowed';
        return;
      }
      if (!_.copyFile(file.source, file.target)) {
        file.error = 'File not overwritten.';
        return;
      }
    }
    
    if (!_.copyFile(file.source, file.target)) {
      file.error = 'File not copied.';
      return;
    }
  
    if (opts.move === true) {
      if (!_.deleteFile(file.source)) {
        file.error = 'Original file not deleted.';
      }
    }
  });
  
  const errCount = opts._files.filter(x => (x && x.source && x.error)).length;
  if (errCount > 0) {
    return [`Failed files: ${errCount}`];
  }
  
  return [];
};

module.exports = processFiles;
