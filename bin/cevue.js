#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require("path");
// const { exec, spawn } = require('child_process');

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
      makeDir(name, options, answers).then(() => {
        // const ls = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install'], {
        //   cwd: `${path.join(path.resolve(), name)}`,
        //   env: process.env
        // });
        // ls.stdout.on('data', (data) => {
        //   console.log(`stdout: ${data}`);
        // });
        // ls.stderr.on('data', (data) => {
        //   console.log(`stderr: ${data}`);
        // });
        // ls.on('close', (code) => {
        //   console.log(chalk.green(`child process exited with code ${code}`));
          
        //   const lsx = spawn(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'start'], {
        //     cwd: `${path.join(path.resolve(), name)}`,
        //     env: process.env
        //   });
        //   lsx.stdout.on('data', (data) => {
        //     console.log(`stdout: ${data}`);
        //   });
        //   lsx.stderr.on('data', (data) => {
        //     console.log(`stderr: ${data}`);
        //   });
        //   lsx.on('close', (code) => {
        //     console.log(chalk.green(`child process exited with code ${code}`));
        //   })
        // });
      });
    })
  })


program.parse(process.argv);
