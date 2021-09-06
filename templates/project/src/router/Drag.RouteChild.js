const baseName = 'drag';

const routerChildren = [
  {
    path: `/${baseName}`,
    redirect: `/${baseName}/index`,
  },
  {
    path: `/${baseName}/index`,
    component: () => import('../pages/DragList.vue'),
    meta: { title: '拖拽列表' },
  },
  {
    path: `/${baseName}/dialog`,
    component: () => import('../pages/DragDialog.vue'),
    meta: { title: '拖拽弹框' },
  },
];

export default routerChildren;
