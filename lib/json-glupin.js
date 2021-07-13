#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

const { getFileName } = require('../util/os-files');
const { packageList } =  require('../const/data-list');

function setPackageJson(Json, options) {
  const ContextJSON = JSON.parse(JSON.stringify(Json, '' , '\t'));
  ContextJSON.name = options.name;
  const depArr = options.answers.lib;
  for (let i = 0; i<packageList.length; i++) {
    if (depArr.indexOf(packageList[i]) === -1) {
      delete ContextJSON.dependencies[packageList[i]];
    }
  }

  if (options.answers.style !== 'scss') {
    delete ContextJSON.devDependencies['sass'];
    delete ContextJSON.devDependencies['sass-loader'];
  }

  return ContextJSON;
}

function handleJson(from, to, options) {
  const FileName = getFileName(from);
  let ContextJSON = JSON.parse(fs.readFileSync(from, 'utf8'));
  if (FileName === 'package.json') {
    ContextJSON = setPackageJson(ContextJSON, options);
  }
  fs.writeFileSync(to, JSON.stringify(ContextJSON, '', '\t'), 'utf8');
  console.log(chalk.yellow('Copy Successed'));
}

module.exports = {
  handleJson
}