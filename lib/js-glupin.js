#!/usr/bin/env node

/**
 *  "babel-polyfill",
    "echarts",
    "moment-timezone",
    "@novnc/novnc",
    "mavon-editor",
    "vue-i18n",
    "vue-video-player",
    "vuedraggable"
 * **/

const fs = require('fs');
const chalk = require('chalk');

function setJavaScript(from, to, options) {

}

function handleJs(from, to, options) {
    if (options.answers.script === 'js') {
        setJavaScript(from, to, options);
    }

}

module.exports = {
    handleJs
}