# 公共项目模板-web前端开发
## 项目说明

请修改`router/index.js`路由设置  

菜单修改在`store/Menu.Const.js`  

切换头部菜单显示请设置`components/Home.vue`的`headerHasMenu`属性 `true`是有头部菜单 `false`是无头部菜单，会把菜单转到左侧

### 关于脚手架与库的使用  

CeVueCli 自定义cli脚手架(欢迎使用和提出建议与维护)<https://github.com/BerQin/cevue-cli>  

Vue快速上手链接<https://cn.vuejs.org/v2/guide/>  
Element UI组件库地址<https://element.eleme.cn/#/zh-CN/component/quickstart>  
时间格式插件Moment.js<https://momentjs.bootcss.com/>  
视频播放插件vue-video-player<https://github.com/topics/vue-video-player>  
远程桌面连接@novnc/novnc<https://www.npmjs.com/package/@novnc/novnc>&nbsp;&nbsp;github<https://github.com/novnc/noVNC/blob/master/docs/API.md>&nbsp;&nbsp;简易的使用介绍<https://blog.csdn.net/weixin_39457424/article/details/113311937>&nbsp;&nbsp;参数API介绍<https://github.com/novnc/noVNC/blob/master/docs/API.md?spm=a2cl9.codeup_devops2020_goldlog_projectFiles.0.0.4e3d3f1afai5Ux&file=API.md>  

### 项目结构

> `public` 不经过编译的资源
> `src` 项目目录
  >> `assets` 静态文件  
  >> `components` 中包含所有用到的组件(自行细分)  
  >> `core` 公共类和业务处理方法  
    >>> `business` 业务类  
    >>> `common` 公共非业务类  
  >> `directive` 指令目录  
  >> `event` 事件创建目录（用于全局的自定义事件传递）  
  >> `filters` 页面通道Filter格式化  
  >> `i18n` 国际化目录  
  >> `pages` 所有的页面模版  
  >> `request` 请求公共方法,可做请求拦截,在其他组件中使用 `this.$request(url,params,type).then(() => {}).catch(() => {})`  
  >> `router` 路由设置目录  
  >> `service` 服务模块  
  >> `store` 全局变量  

# 项目的使用
## 快速开始

安装
```bash
$ npm i
```

🖖 启动服务
```bash
$ npm run start
```

正式环境构建
```bash
$ npm run build
```

测试环境构建调试
```bash
$ npm run build:dev
```
