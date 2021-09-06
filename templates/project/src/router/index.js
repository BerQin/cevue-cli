import Vue from 'vue';
import Router from 'vue-router';

import Index from './Index.RouteChild';
import Form from './Form.RouteChild';
import Drag from './Drag.RouteChild';
import Permission from './Permission.RouteChild';
import I18n from './I18n.RouteChild';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/',
      component: () => import('../components/Home.vue'),
      meta: { title: '自述文件' },
      children: [
        ...Index,
        ...Form,
        ...Drag,
        ...I18n,
        ...Permission,
        {
          path: '/403',
          component: () => import('../pages/403.vue'),
          meta: { title: '403' },
        },
      ],
    },
    {
      path: '/login',
      component: () => import('../pages/Login.vue'),
      meta: { title: '登录' },
    },
    {
      path: '*',
      redirect: '/permission/404',
    },
  ],
});
