#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const pJson = require('../package.json');
const {createInquirer} = require('../lib/inquirer-list');

const { makeDir } = require('../lib/create-dir');

program
  .version(`@cevue/cli ${pJson.version}`, '-v, --version')
  .usage('<command> [options]')

program
  .command('create <app-name>')
  .description('Create an engineering project')
  .alias('c')
  .action((name, options) => {
    inquirer.prompt(createInquirer).then((answers) => {
      makeDir(name, options, answers)
    })
  })


program.parse(process.argv);
