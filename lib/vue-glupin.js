#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const { packageList } = require('../const/data-list');

const { getFileName } = require('../util/os-files');

function handleVue(from, to, options) {
  const FileName = getFileName(from);
  if (
    options.answers.lib.indexOf('echarts') == -1 &&
    FileName.indexOf('BaseCharts') !== -1
  ) {
    return false;
  }
  if (
    options.answers.lib.indexOf('mavon-editor') == -1 &&
    FileName.indexOf('Markdown') !== -1
  ) {
    return false;
  }
  if (
    options.answers.lib.indexOf('vue-quill-editor') == -1 &&
    FileName.indexOf('VueEditor') !== -1
  ) {
    return false;
  }
  if (
    options.answers.lib.indexOf('vue-i18n') == -1 &&
    FileName.indexOf('I18n') !== -1
  ) {
    return false;
  }
  const ContextMenuJs = fs.readFileSync(from, 'utf8');
  let newContextVue = ContextMenuJs;

  if (options.answers.style == 'css') {
    newContextVue = newContextVue.replace(
      /<style lang=\".*?\"/gis,
      '<style lang="css"'
    );
    newContextVue = newContextVue.replace(/\.(scss|less)/gis, '.css');
  }

  newContextVue = newContextVue.replace(
    /\<\!\-\- title \-\-\>/gis,
    options.answers.title
  );

  // 全面替换掉没用的组件内容
  packageList.forEach((item) => {
    if (options.answers.lib.indexOf(item) == -1) {
      item = item.replace(/\//g, '\\/').replace(/\@/g, '\\@');
      newContextVue = newContextVue.replace(
        eval(`/\\/\\/ ${item}.*?\\/\\/ end${item}[\\s\\n]*/isg`),
        ''
      );
      newContextVue = newContextVue.replace(
        eval(
          `/\\<\\!\\-\\- ${item} \\-\\-\\>.*?\\<\\!\\-\\- end${item} \\-\\-\\>[\\s\\n]*/isg`
        ),
        ''
      );
    }
  });

  fs.writeFileSync(to, newContextVue, 'utf8');
  console.log(chalk.yellow('Copy Successed'));
}

module.exports = {
  handleVue,
};
