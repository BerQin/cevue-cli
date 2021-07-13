#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

function handleImg(from, to, options) {
  const ContextIMG = fs.readFileSync(from);
  fs.writeFileSync(to, ContextIMG);
  console.log(chalk.yellow('Copy Successed'));
}

module.exports = {
  handleImg
}