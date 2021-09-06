# 公共项目模板-web前端开发
## 项目说明

进入项目后请自行修改不需要的插件`package.json`,以及`main.js`的引用，<br/>
请修改`router/index.js`路由设置<br/>
菜单修改在`store/menu.js`<br/>
`menu`规则是根据当前的数据结构，第一数组放在头部做一级菜单，`subs`下的放在左侧做次级菜单最多支持4级菜单，如果不存在头部菜单，支持3级菜单，菜单的路由是`index`属性，头部菜单的数据设置是一层数组每一项`index`放`router`的第一个路由字段，二级以及之后的菜单放全路径，菜单组的组菜单请自行安排id，icon可设置`element`的`classname`，只存在侧边栏菜单的请按照侧边菜单规则设置，如果需要修改请自行修改<br/>
切换头部菜单显示请设置`components/Home.vue`的`headerHasMenu`属性 `true`是有头部菜单 `false`是无头部菜单，会把菜单转到左侧

### 关于脚手架与库的使用  

CeVueCli 自定义cli脚手架(欢迎使用和提出建议与维护)<https://github.com/BerQin/cevue-cli>  

Vue快速上手链接<https://cn.vuejs.org/v2/guide/>
<br/>
Element UI组件库地址<https://element.eleme.cn/#/zh-CN/component/quickstart>
<br/>
时间格式插件Moment.js<https://momentjs.bootcss.com/>
<br/>
视频播放插件vue-video-player<https://github.com/topics/vue-video-player>
<br/>
远程桌面连接@novnc/novnc<https://www.npmjs.com/package/@novnc/novnc>&nbsp;&nbsp;github<https://github.com/novnc/noVNC/blob/master/docs/API.md>&nbsp;&nbsp;简易的使用介绍<https://blog.csdn.net/weixin_39457424/article/details/113311937>&nbsp;&nbsp;参数API介绍<https://github.com/novnc/noVNC/blob/master/docs/API.md?spm=a2cl9.codeup_devops2020_goldlog_projectFiles.0.0.4e3d3f1afai5Ux&file=API.md>

### 项目结构

`public` index.html/其他静态文件
<br/><br/>

`src` 项目目录
<br/>

&nbsp;&nbsp;`assets` 静态文件
<br/>

&nbsp;&nbsp;`components` 中包含所有用到的组件(自行细分) 
<br/>

&nbsp;&nbsp;`directive` 指令目录
<br/>

&nbsp;&nbsp;`event` 事件创建目录（用于全局的自定义事件传递）
<br/>

&nbsp;&nbsp;`filters` 页面通道Filter格式化
<br/>

&nbsp;&nbsp;`function` 公共方法
<br/>

&nbsp;&nbsp;`i18n` 国际化目录
<br/>

&nbsp;&nbsp;`pages` 所有的页面模版
<br/>

&nbsp;&nbsp;`request` 请求公共方法,可做请求拦截,在其他组件中使用 `this.$request(url,params,type).then(() => {}).catch(() => {})`
<br/>

&nbsp;&nbsp;`router` 路由设置目录
<br/>

&nbsp;&nbsp;`service` 全局的服务模块
<br/>

&nbsp;&nbsp;`store` 全局变量
<br/><br/>
其他可以按照目录名称对应功能，结构简单易懂！

# 项目的使用
## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm run start
```

Build the project

```bash
$ npm run build
```
