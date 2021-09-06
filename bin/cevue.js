#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');

const pJson = require('../package.json');
const { createInquirer } = require('../const/inquirer-list');
const { makeDir } = require('../lib/create-dir');
const runCreatShell = require('../util/creat.shell');

program
  .version(`cevuel-cli ${pJson.version}`, '-v, --version')
  .usage('<command> [options]');

program
  .command('create <app-name>')
  .description('Create an engineering project')
  .alias('c')
  .action((name, options) => {
    inquirer.prompt(createInquirer).then(async (answers) => {
      await makeDir(name, options, answers);
      await runCreatShell(name, options, answers);
    });
  });

program.parse(process.argv);
