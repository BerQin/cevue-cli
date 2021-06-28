#!/usr/bin/env node

const packageList = [
    "babel-polyfill",
    "echarts",
    "moment-timezone",
    "@novnc/novnc",
    "mavon-editor",
    "vue-quill-editor",
    "vue-i18n",
    "vue-video-player",
    "xlsx"
]

const noReadNameDir = [
    'node_modules',
    'dist',
    'package-lock.json',
    '.DS_Store'
];

module.exports = {
    packageList,
    noReadNameDir
}