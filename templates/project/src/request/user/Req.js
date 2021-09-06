import ReqFn from '../common/ReqFunction';
import api from './Src';

const resData = {
  login: (params) => {
    return new Promise((resolve) => {
      ReqFn.Request(api.login, params, 'GET').then((data) => {
        resolve(data);
      });
    });
  },
};

export default resData;
