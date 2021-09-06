import { CookieClass } from "@/core/common";

function UserService() {
  this.username = CookieClass.getCookie('username');
  this.token = CookieClass.getCookie('token');
}

UserService.prototype.getUserInfo = function () {
  return {
    username: CookieClass.getCookie('username'),
    token: CookieClass.getCookie('token')
  }
}

UserService.prototype.setUserInfo = function (json) {
  Object.keys(json).forEach((key) => {
    if (json[key] && typeof json[key] !== 'object') {
      this[key] = json[key];
    }
    if (key == 'username' || key == 'token') {
      const SetData = {};
      SetData[key] = json[key];
      CookieClass.setCookie(SetData);
    }
  });
}

UserService.prototype.clear = function () {
  this.name = null;
  this.token = null;
  CookieClass.deleteCookie(['username', 'token']);
}

export default UserService;