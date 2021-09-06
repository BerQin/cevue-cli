import Vue from 'vue';
import router from '@/router';

function UserLogClass() {}

UserLogClass.prototype.LogOut = function (isHref = false) {
  Vue.prototype.$services.UserService.clear();
  if (isHref) {
    window.location.href = `http://${window.location.host}${process.env.VUE_APP_LOGIN_URL}`;
  } else {
    router.push('/login');
  }
};

UserLogClass.prototype.UpUserInfo = function (userInfo = {}) {
  Vue.prototype.$services.UserService.setUserInfo(userInfo);
};

UserLogClass.prototype.GetLoginInfo = function () {
  return Vue.prototype.$services.UserService.getUserInfo();
};

export default new UserLogClass();
