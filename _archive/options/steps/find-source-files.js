const _         = require('../../utils');
const fs        = require('fs');
const path      = require('path');
const uglyDate  = require('@fredlackey/ugly-date');

const findFiles = (cache, folder, recursive) => {
  if (!_.isDirectory(folder)) { return; }
  let names = null;
  try {
    names = fs.readdirSync(folder);
  } catch (ex) {
    console.error(`Failure reading path: ${folder}`);
    return false;
  }

  const paths = [].concat(names)
    .filter(_.isValidString)
    .map(name => (path.join(folder, name)));
  
  const folders = paths.filter(_.isDirectory);
  if (recursive) {
    folders.forEach(dirPath => {
      findFiles(cache, dirPath, recursive);
    });
  }

  paths.filter(x => (x && !folders.includes(x))).forEach(x => {
    cache.paths.push(x);
  });
};

const findSourceFiles = opts => {

  const cache = {
    paths : []
  };
  findFiles(cache, opts.source, opts.recursive);
  
  opts._files = cache.paths
    .filter(_.isValidString)
    .filter(item => {

      if (opts.useCreated || opts.useModified) { 
        return true; 
      }

      const info = uglyDate.analyze(path.basename(item));
      if (!info || !info.date) {
        return false;
      }
      if (!info.hasDate && !info.hasTime) {
        return false;
      }
      if (!info.hasDate) {
        console.info(`NO DATE: ${path.basename(item)}`);
        return false;
      }
      if (!info.hasTime) {
        console.info(`NO TIME: ${path.basename(item)}`);
        return false;
      }

      if (!info.hasTime || ((opts.addHour || opts.addMinute || opts.addSecond))) {
        return false;
      }

      return true;
    });

  return [];
};

module.exports = findSourceFiles;
