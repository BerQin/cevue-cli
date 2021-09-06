import { UserLogClass } from '@/core/business';
import { Menu } from '@/event';
import router from './index';

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  const userData = UserLogClass.GetLoginInfo();
  if (userData.username && userData.token) {
    next();
  } else {
    if (to.path !== '/login') {
      next('/login');
    } else {
      next();
    }
  }
});

router.beforeResolve((to, from, next) => {
  next();
  if (to.path !== '/login') {
    Menu.$emit('routerChangeMenu', to);
  }
});
