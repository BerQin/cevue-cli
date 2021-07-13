#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

function handleMd(from, to, options) {
  const ContextMD = fs.readFileSync(from, 'utf8');
  fs.writeFileSync(to, ContextMD,  'utf8');
  console.log(chalk.yellow('Copy Successed'));
}

module.exports = {
  handleMd
}