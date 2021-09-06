#!/usr/bin/env node

/**
 *  "babel-polyfill",
    "echarts",
    "moment-timezone",
    "@novnc/novnc",
    "mavon-editor",
    "vue-i18n",
    "vue-video-player",
    "vuedraggable",
    "xlsx"
 * **/

const fs = require('fs');
const chalk = require('chalk');
const { packageList } = require('../const/data-list');
const { getFileName } = require('../util/os-files');

function setJavaScript(from, to, options) {
  const FileName = getFileName(from);
  const ContextMenuJs = fs.readFileSync(from, 'utf8');
  let newContextMenuJs = ContextMenuJs;
  packageList.forEach((item) => {
    if (options.answers.lib.indexOf(item) == -1) {
      item = item.replace(/\//g, '\\/').replace(/\@/g, '\\@');
      newContextMenuJs = newContextMenuJs.replace(
        eval(`/\\/\\/ ${item}.*?\\/\\/ end${item}[\\s\\n]*/isg`),
        ''
      );
    }
    if (FileName == 'vue.config.js') {
      newContextMenuJs = newContextMenuJs.replace(
        eval(`/\\/\\/ port.*?\\/\\/ endport/isg`),
        `port: ${options.answers.port}`
      );
    }
  });

  fs.writeFileSync(to, newContextMenuJs, 'utf8');
  console.log(chalk.yellow('Copy Successed'));
}

function handleJs(from, to, options) {
  if (options.answers.script === 'js') {
    setJavaScript(from, to, options);
  }
}

module.exports = {
  handleJs,
};
