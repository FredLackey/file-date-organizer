#!/usr/bin/env node

const _           = require('./utils');
const options     = require('./options');
const { processOptions } = require('./index');

const { argv } = require('yargs').options(options.formatters.toYargs());

const main = async () => {

  const opts = {};
  Object.keys(argv)
    .filter(_.isAlphanumeric)
    .forEach(key => {
      opts[key] = argv[key];
    });

  if (_.isSet(opts.markdown) || _.isSet(opts.cliMarkdown) || _.isSet(opts.markdownCli)) {
    const lines = options.formatters.toMarkdown(_.isSet(opts.cliMarkdown) || _.isSet(opts.markdownCli));
    lines.forEach(line => {
      console.log(line);
    });
    return;
  }

  const { files, errors } = await processOptions(opts);
  const failed  = [].concat(files).filter(x => (x && x.start && x.error));
  const success = [].concat(files).filter(x => (x && x.start && !x.error));

  errors.forEach(err => {
    console.error(`Error: ${err}`);
  });
  
  if (failed.length === 0 && success.length === 0) {
    console.info('Nothing to do.');
    return;
  }
  if (failed.length > 0) {
    console.info(`Failed: ${failed.length}`);
  }
  console.info(`Success: ${success.length}`);
};

main();

