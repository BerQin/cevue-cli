import axios from "axios";
import { Message } from "element-ui";

import ReqConst from './Const';
import { UserLogClass } from '@/core/business';

axios.defaults.withCredentials = true; //配置允许跨域携带cookie
const HttpError = {
  400: "请求错误",
  401: "未授权，请登录",
  403: "拒绝访问",
  404: "求地址出错",
  408: "请求超时",
  500: "服务器开个小差，请稍后再试",
  501: "服务器开个小差，请稍后再试",
  502: "服务器开个小差，请稍后再试",
  503: "服务器开个小差，请稍后再试",
  504: "服务器开个小差，请稍后再试",
  505: "HTTP版本不受支持"
};

axios.interceptors.request.use(
  config => {
    config.headers= {
      "Content-Type": "application/json;charset=UTF-8"
    };
    // if(store.token){
    //   let token="Bearer " + store.token;
    //   config.headers.authorization = token;
    // } 
    config.crossDomain = true;  //配置跨域状态
    config.timeout = 200000;   //配置超时时间
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use(
  res => {
    return res;
  },

  error => {
    return Promise.reject(error);
  }
);



/**
 * 
 * @func axios的二次封装
 * @param {String} url String
 * @param {Object} params Object
 * @param {String} method 'GET' | 'POST' | 'PUT' | 'DELETE'
 * @param {Object} options {noCatch: Boolean // 是否使用通用报错}
 * @returns Promise
 */
const request = (url, data = {}, method = "GET", config = {
  noCatch: false
}) => {
  let params = 'data';
  const methodType = method.toUpperCase();
  if (ReqConst.ParamsTypeList.indexOf(methodType) !== -1) {
    params = 'params';
  }
  return new Promise((resolve, reject) => {
    axios({
      url: process.env.VUE_APP_BASE_URL + url,
      method: methodType,
      [params]: data
    })
      .then(res => {
        resolve(res.data.data);
      })
      .catch(e => {
        reject(e);
        if (config.noCatch) return false; 
        if(e.response.status != 200){
          if(e.response.status == 401 ){
            UserLogClass.LogOut();
          }else{
            Message({type: "error", message:e.response.data.message || HttpError[e.response.status] }); 
          }
        }
      });
  });
};

export default request;
