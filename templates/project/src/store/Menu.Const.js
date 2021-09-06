const MenuList = [
  {
    icon: 'el-icon-s-home',
    index: '/index',
    title: '首页',
    subs: [
      {
        icon: 'el-icon-s-home',
        index: '/index/dashboard',
        title: '首页',
      },
      {
        icon: 'el-icon-coin',
        index: '/index/table',
        title: '基础表格',
      },
      {
        icon: 'el-icon-money',
        index: '/index/tabs',
        title: 'tab选项卡',
      },
      // echarts
      {
        icon: 'el-icon-data-line',
        index: '/index/charts',
        title: 'echart图表',
      },
      // endecharts
      {
        icon: 'el-icon-paperclip',
        index: '/index/icon',
        title: '图标展示',
      },
    ],
  },
  {
    icon: 'el-icon-news',
    index: '/form',
    title: '表单相关',
    subs: [
      {
        icon: 'el-icon-news',
        index: '/form/index',
        title: '基本表单',
      },
      // mavon-editor
      {
        index: '3-2',
        title: '三级菜单',
        subs: [
          {
            icon: 'el-icon-connection',
            index: '/form/editor',
            title: '富文本编辑器',
          },
          {
            icon: 'el-icon-full-screen',
            index: '/form/markdown',
            title: 'markdown编辑器',
          },
        ],
      },

      // endmavon-editor
      {
        icon: 'el-icon-receiving',
        index: '/form/upload',
        title: '文件上传',
      },
    ],
  },
  {
    icon: 'el-icon-place',
    index: '/drag',
    title: '拖拽组件',
    subs: [
      {
        icon: 'el-icon-football',
        index: '/drag/index',
        title: '拖拽列表',
      },
      {
        icon: 'el-icon-sunset',
        index: '/drag/dialog',
        title: '拖拽弹框',
      },
    ],
  },
  {
    icon: 'el-icon-attract',
    index: '/permission',
    title: '错误处理',
    subs: [
      {
        icon: 'el-icon-dish',
        index: '/permission/index',
        title: '权限测试',
      },
      {
        icon: 'el-icon-stopwatch',
        index: '/permission/404',
        title: '404页面',
      },
    ],
  },
  // vue-i18n
  {
    icon: 'el-icon-message',
    index: '/i18n',
    title: '国际化',
  },
  // endvue-i18n
];

export default MenuList;
