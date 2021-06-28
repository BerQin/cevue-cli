#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

const { getFileName } = require('./os-files');

function handleOtherFiles(from, to, options) {
    const FileName = getFileName(from);
    // console.log(FileName);
    const ContextFile = fs.readFileSync(from, 'utf8');
    const newContextFile = ContextFile.replace(/\/\/ title.*?\/\/ endtitle/isg, options.answers.title);
    fs.writeFileSync(to, newContextFile, 'utf8');
    console.log(chalk.yellow('Copy Successed'));
}

module.exports = {
    handleOtherFiles
}