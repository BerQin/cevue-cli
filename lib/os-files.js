#!/usr/bin/env node

const os = require('os');

function getOsType() {
    switch (os.platform()) {
        case 'win32':
            return 'win';
        default:
            return 'mac';
    }
}

function getFileName(path) {
    const splitF = getOsType() === 'win' ?  '\\' : '/';
    const arr = path.split(splitF);
    return arr[arr.length - 1];
}

module.exports = {
    getFileName,
    getOsType
}