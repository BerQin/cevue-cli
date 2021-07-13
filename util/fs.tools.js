#!/usr/bin/env node

const fs = require('fs');
const path = require("path");

module.exports = {
  FsisAccess(filePath) {
    try {
      fs.statSync(filePath);
      return true;
    } catch (e) {
      return false
    }
  },
  creatDir(filesPath) {
    if (fs.existsSync(filesPath)) {
      return true;
    } else {
      if (this.creatDir(path.dirname(filesPath))) {
        fs.mkdirSync(filesPath);
        return true;
      }
    }
    return false;
  },
}