#!/usr/bin/env node

const fs = require('fs');
const path = require("path");
const chalk = require('chalk');
const { handleHtml } = require('./html-glupin');
const { handleImg } = require('./img-glupin');
const { handleJs } = require('./js-glupin');
const { handleJson } = require('./json-glupin');
const { handleMd } = require('./md-glupin');
const { handleStyle } = require('./style-glupin');
const { handleVue } = require('./vue-glupin');
const { handleOtherFiles } = require('./other-files-glupin');
const { noReadNameDir } = require('./const/data-list');

const typeImageList = ['jpeg', 'png', 'jpg', 'svg', 'ico', 'gif', 'bmp'];
const typeStyleList = ['css', 'scss', 'sass', 'less'];

function copyFile(from, to, options) {
    const fileStrArr = from.split('.');
    const type = fileStrArr[fileStrArr.length - 1];

    switch(type) {
        case 'html':
            handleHtml(from, to, options);
            break;
        case 'js':
            handleJs(from, to, options);
            break;
        case 'json':
            handleJson(from, to, options);
            break;
        case 'md':
            handleMd(from, to, options);
            break;
        case 'vue':
            handleVue(from, to, options);
            break;
        default:
            if (typeImageList.indexOf(type) !== -1) {
                handleImg(from, to, options);
            } else if (typeStyleList.indexOf(type) !== -1 ) {
                handleStyle(from, to, options);
            } else {
                handleOtherFiles(from, to, options);
            }
    }
}

function readFile(filePath, toPath, Options) {
    fs.stat(filePath, function(eror,stats) {
        if(eror){
            console.log(chalk.yellow('Failed to get file stats'));
        }else{
            var isFile = stats.isFile();
            var isDir = stats.isDirectory();
            if(isFile){
                console.log(chalk.green('Copying:' + filePath));
                copyFile(filePath, toPath, Options);
            }
            if(isDir){
                readDir(filePath, toPath, Options);
            }
        }
    });
}

function creatDir(from, to, callback) {
    fs.access(to, existing => {
        if (existing) {
            fs.mkdir(to, (err) => {
                if (err) {
                    console.error(chalk.red(err));
                } else {
                    // console.log(chalk.red(1));
                    callback && callback();
                }
            })
        } else {
            callback && callback();
        }
    });
}

function readDir(dirpath, toPath, Options) {
    creatDir(dirpath, toPath)
    fs.readdir(dirpath, function(err, files) {
        if(err){
            console.warn(chalk.yellow(err))
        }else{
            files.forEach(function(filename){
                const filedir = path.join(dirpath, filename);
                const toDir = path.join(toPath, filename);
                if ((Options.answers.lib.indexOf('vue-i18n') == -1 && filename.indexOf('i18n') !== -1) || noReadNameDir.indexOf(filename) !== -1) {
                    return false;
                }
                readFile(filedir, toDir, Options);
            });
        }
    });
}

async function makeDir(name, options, answers) {
    const UserPath = path.join(path.resolve(), name);
    const Libpath = path.join(__dirname, '../templates/project');
    const Options = {
        name: name,
        option: options,
        answers: answers
    };
    return await readDir(Libpath, UserPath, Options);
}

module.exports = {
    makeDir
}