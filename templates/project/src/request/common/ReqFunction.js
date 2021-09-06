import Request from './Request';

function ReqFunction() {}

/**
 *
 * @param {String} url String: Api请求基础路径 eg: ‘/api/v1/{id}/{apid}/login’
 * @param {Object} config Object: Api路由参数 eg: {id: 1, apid: 1}
 * @returns String
 */
ReqFunction.prototype.SetUrl = function (url = '', params = {}) {
  let res = url;
  Object.keys(params).forEach((key) => {
    res = res.replace(`{${key}}`, params[key]);
  });
  return res;
};

/**
 *
 * @param {String} url String
 * @param {Object} params Object
 * @param {String} method 'GET' | 'POST' | 'PUT' | 'DELETE'
 * @param {Object} options {noCatch: Boolean // 是否使用通用报错}
 * @returns Promise
 */
ReqFunction.prototype.Request = function (
  url = '',
  params = {},
  method = 'GET',
  options = {
    noCatch: false,
  }
) {
  const { vPath } = params;
  delete params.vPath;
  return Request(
    this.SetUrl(url, vPath),
    ...[...arguments].slice(1, arguments.length)
  );
};

export default new ReqFunction();
