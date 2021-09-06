const baseName = 'permission';

const routerChildren = [
  {
    path: `/${baseName}`,
    redirect: `/${baseName}/index`
  },
  {
      path: `/${baseName}/index`,
      component: () => import('../pages/Permission.vue'),
      meta: { title: '权限测试', permission: true }
  },
  {
      path: `/${baseName}/404`,
      component: () => import('../pages/404.vue'),
      meta: { title: '404' }
  },
];

export default routerChildren;