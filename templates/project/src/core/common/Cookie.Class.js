function CookieClass() {
  this.domain = window.location.host.replace('www', '').split(':')[0];
  this.path = '/';
  this.time = 60*60*1000;
}

CookieClass.prototype.getCookie = function(name) {
  let arr = [];
  const reg =new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr = document.cookie.match(reg))
  return unescape(arr[2]);
  else
  return null;
}

/**
 * 
 * @param {Object} json 需要设置的JSON数据key:value
 * @param {Number} time 有效期[可选]持续时间/ms
 */
CookieClass.prototype.setCookie = function(json, time) {
  const exp = new Date();
  exp.setTime(exp.getTime() + ( time || this.time));
  Object.keys(json).forEach((key) => {
    const cookie = `${key}=${json[key]}; expires=${exp.toGMTString()}; path=${this.path}; domain=${this.domain}`;
    document.cookie = cookie;
  });
}

/**
 * 
 * @param {Array} keys 需要删除的key数组
 */
CookieClass.prototype.deleteCookie = function(keys = []) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  keys.forEach((key) => {
    const value = this.getCookie(key);
    if(value!=null)
      document.cookie= `${key}=${value}; expires=${exp.toGMTString()}`;
  });
}

export default new CookieClass();