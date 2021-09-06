#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

function handleHtml(from, to, options) {
  const ContextHTML = fs.readFileSync(from, 'utf8');
  const newContextHTML = ContextHTML.replace(
    /\/\/ title.*?\/\/ endtitle/gis,
    options.answers.title
  );
  try {
    fs.writeFileSync(to, newContextHTML, 'utf8');
    console.log(chalk.yellow('Copy Successed'));
  } catch (e) {
    console.error(chalk.red(e));
    throw e;
  }
}

module.exports = {
  handleHtml,
};
