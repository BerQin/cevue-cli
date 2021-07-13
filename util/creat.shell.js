#!/usr/bin/env node

const chalk = require('chalk');
const path = require("path");
const {runInstall, npmCmd} = require('./shell');
const log = require('./log');
const pJson = require('../package.json');

module.exports = async function(name, options, answers) {
  const UserPath = path.join(path.resolve(), name);
  const npmc = npmCmd();
  // runInstall(npmc, ['i'], UserPath);
  let logStr = log.getLogo();
  logStr += `
    \n
    Name: cevuel-cli
    Npm: cevue -v
    Version: ${pJson.version}
    From: BerQin
    Successfully created project ${name}
    Path: ${chalk.green(`Installed in ${UserPath}`)}
    👉  Get started with the following commands:
    \n
    $ ${chalk.blue(`cd ${name}`)}
    $ ${chalk.blue(`npm run start`)}
  `;
  console.log(chalk.yellow(logStr));
}