const path = require('path');
const _ = require('../../utils');
const uglyDate = require('@fredlackey/ugly-date');
const fs = require('fs');

const dateInfoFromFile = (opts, source) => {
  let stats = null;
  try {
    stats = fs.statSync(source);
    if (!stats.isFile()) { return null; }
  } catch (ex) {
    console.error(ex);
    return null;
  }
  const date = opts.useModified ? stats.mtime : stats.ctime;
  return date;
};
const dateInfoFromName = (opts, source) => {
  if (!opts.useName) { return null; }
  const info = uglyDate.analyze(path.basename(source));
  if (!info || !info.date || !info.hasDate) { 
    return null; 
  }
  if (!info.hasTime && opts.addHour) { 
    return null; 
  }
  return info.date;
};
const getTargetPath = (opts, source) => {
  const date = dateInfoFromName(opts, source) || dateInfoFromFile(opts, source);
  const YYYY = opts.addYear ? `${date.getFullYear()}` : '';
  const MM   = opts.addYear ? `${date.getMonth() + 1}`.padStart(2, '0') : '';
  const dd   = opts.addDay ? `${date.getDate()}`.padStart(2, '0') : '';
  const hh   = opts.addDay ? `${date.getHours()}`.padStart(2, '0') : '';
  const mm   = opts.addDay ? `${date.getMinutes()}`.padStart(2, '0') : '';
  const ss   = opts.addSecond ? `${date.getSeconds()}`.padStart(2, '0') : '';
  const parts = [YYYY, MM, dd, hh, mm, ss].filter(x => (x && x.trim().length > 0));
  const target = path.join(opts.target, ...parts);
  return path.join(target, path.basename(source));
};

const setTargets = opts => {

  if (!_.isValidArray(opts._files)) { 
    return []; 
  }

  opts._files = opts._files.map(source => ({
    source
  }));

  for (let i = 0; i < opts._files.length; i += 1) {
    opts._files[i].target = getTargetPath(opts, opts._files[i].source);
  }

  return [];
};

module.exports = setTargets;
