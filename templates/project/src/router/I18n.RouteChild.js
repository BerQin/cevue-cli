const baseName = 'i18n';

const routerChildren = [
  // vue-i18n
  {
      path: `/${baseName}`,
      component: () => import('../pages/I18n.vue'),
      meta: { title: '国际化页面', permission: true }
  },
  // endvue-i18n
];

export default routerChildren;