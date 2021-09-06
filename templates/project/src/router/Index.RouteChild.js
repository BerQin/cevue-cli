const baseName = 'index';

const routerChildren = [
  {
    path: `/${baseName}`,
    redirect: `/${baseName}/dashboard`,
  },
  {
    path: `/${baseName}/dashboard`,
    component: () => import('../pages/Dashboard.vue'),
    meta: { title: '系统首页' },
  },
  {
    path: `/${baseName}/icon`,
    component: () => import('../pages/Icon.vue'),
    meta: { title: '自定义图标' },
  },
  {
    path: `/${baseName}/table`,
    component: () => import('../pages/BaseTable.vue'),
    meta: { title: '基础表格' },
  },
  {
    path: `/${baseName}/tabs`,
    component: () => import('../pages/Tabs.vue'),
    meta: { title: 'tab选项卡' },
  },
  // echarts
  {
    path: `/${baseName}/charts`,
    component: () => import('../pages/BaseCharts.vue'),
    meta: { title: 'charts图表' },
  },
  // endecharts
];

export default routerChildren;
