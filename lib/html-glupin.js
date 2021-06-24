#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');

function handleHtml(from, to, options) {
    const ContextHTML = fs.readFileSync(from, 'utf8');
    const newContextHTML = ContextHTML.replace(/\/\~\(title\)\~\//g, options.answers.title);
    fs.writeFileSync(to, newContextHTML, 'utf8');
    console.log(chalk.yellow('Copy Successed'));
}

module.exports = {
    handleHtml
}