#!/usr/bin/env node
const { packageList } =  require('./data-list');

module.exports = {
    createInquirer: [
        {
            type: "input",
            message: "Please enter the title of your project (Applied in the HTML title tag)",
            name: "title",
            filter: function (val) {
                if (!val) {
                    return 'Vue-elementUI-project';
                }
                return val;
            }
        },
        {
            type: "list",
            message: "Please choose style type",
            name: "style",
            choices: [
                "Scss",
                "Css"
            ],
            filter: function (val) {
                return val.toLowerCase();
            }
        }, 
        {
            type: "list",
            message: "Please choose script type",
            name: "script",
            choices: [
                "Js",
                // "Ts"
            ],
            filter: function (val) {
                return val.toLowerCase();
            }
        },
        {
            type: "checkbox",
            message: "Please select a plug-in library",
            name: "lib",
            choices: packageList,
        }, {
            type: "input",
            message: "Please input server port",
            name: "port",
            filter: function (val) {
                if (!(val - 0)) {
                    return 8080;
                } else {
                    return val;
                }
            }
        }
    ]
};
