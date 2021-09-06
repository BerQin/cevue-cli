#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { handleHtml } = require('./html-glupin');
const { handleImg } = require('./img-glupin');
const { handleJs } = require('./js-glupin');
const { handleJson } = require('./json-glupin');
const { handleMd } = require('./md-glupin');
const { handleStyle } = require('./style-glupin');
const { handleVue } = require('./vue-glupin');
const { handleOtherFiles } = require('./other-files-glupin');
const { noReadNameDir } = require('../const/data-list');

const FsUtil = require('../util/fs.tools');

const typeImageList = ['jpeg', 'png', 'jpg', 'svg', 'ico', 'gif', 'bmp'];
const typeStyleList = ['css', 'scss', 'sass', 'less'];

function copyFile(from, to, options) {
  const fileStrArr = from.split('.');
  const type = fileStrArr[fileStrArr.length - 1];
  switch (type) {
    case 'html':
      handleHtml(from, to, options);
      break;
    case 'js':
      handleJs(from, to, options);
      break;
    case 'json':
      handleJson(from, to, options);
      break;
    case 'md':
      handleMd(from, to, options);
      break;
    case 'vue':
      handleVue(from, to, options);
      break;
    default:
      if (typeImageList.indexOf(type) !== -1) {
        handleImg(from, to, options);
      } else if (typeStyleList.indexOf(type) !== -1) {
        handleStyle(from, to, options);
      } else {
        handleOtherFiles(from, to, options);
      }
  }
}

function readFile(filePath, toPath, Options) {
  const stats = fs.statSync(filePath);
  const isFile = stats.isFile();
  const isDir = stats.isDirectory();
  if (isFile) {
    console.log(chalk.green('Copying:' + filePath));
    copyFile(filePath, toPath, Options);
  }
  if (isDir) {
    readDir(filePath, toPath, Options);
  }
}

function readDir(dirpath, toPath, Options) {
  if (FsUtil.creatDir(toPath)) {
    const files = fs.readdirSync(dirpath);
    files.forEach(function (filename) {
      const filedir = path.join(dirpath, filename);
      const toDir = path.join(toPath, filename);
      if (
        (Options.answers.lib.indexOf('vue-i18n') == -1 &&
          filename.indexOf('i18n') !== -1) ||
        noReadNameDir.indexOf(filename) !== -1
      ) {
        return false;
      }
      readFile(filedir, toDir, Options);
    });
  } else {
    const ErrorInfo = `Target ${toPath} directory creation failed`;
    console.error(chalk.red(ErrorInfo));
    throw ErrorInfo;
  }
}

function makeDir(name, options, answers) {
  const UserPath = path.join(path.resolve(), name);
  const Libpath = path.join(__dirname, '../templates/project');
  const Options = {
    name: name,
    option: options,
    answers: answers,
  };
  readDir(Libpath, UserPath, Options);
}

module.exports = {
  makeDir,
};
