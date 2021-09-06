#!/usr/bin/env node

const execa = require('execa');
const { spawnSync } = require('child_process');
const os = require('os');

module.exports = {
  npmCmd() {
    return os.platform().startsWith('win') ? 'npm.cmd' : 'npm';
  },
  run(command, args) {
    if (!args) {
      [command, ...args] = command.split(/\s+/);
    }
    return execa(command, args, { cwd: this.context });
  },
  runInstall(command, args, path) {
    if (!args) {
      [command, ...args] = command.split(/\s+/);
    }
    return spawnSync(command, args, {
      env: process.env,
      cwd: path,
      stdio: 'inherit',
    });
  },
};
