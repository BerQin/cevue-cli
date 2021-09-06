#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

const { getFileName } = require('../util/os-files');

function handleStyle(from, to, options) {
  const filesName = getFileName(from);
  const fileArr = filesName.split('.');
  const suffix = fileArr[fileArr.length - 1];

  const ContextSTYLE = fs.readFileSync(from, 'utf8');

  if (options.answers.style === 'css') {
    const toFileArr = to.split('.');
    toFileArr[toFileArr.length - 1] = 'css';
    fs.writeFileSync(toFileArr.join('.'), ContextSTYLE, 'utf8');
    console.log(chalk.yellow('Copy Successed'));
  } else {
    fs.writeFileSync(to, ContextSTYLE, 'utf8');
    console.log(chalk.yellow('Copy Successed'));
  }
}

module.exports = {
  handleStyle,
};
