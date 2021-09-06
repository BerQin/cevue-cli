import Vue from 'vue';

function ServiceRegisterClass() {
  this.nameSpacePrefix = 'NameSpace_';
  Vue.prototype.$services = {};
}

/**
 * 用于服务注册到Vue
 * @param {Service} servicesJson 服务实例JSON数据
 * @param {String} namespace 命名空间,服务作用域
 */
ServiceRegisterClass.prototype.register = function (servicesJson, namespace) {
  if (!namespace) {
    Object.keys(servicesJson).forEach((key) => {
      if (key && servicesJson[key]) {
        Vue.prototype.$services[key] = servicesJson[key];
      }
    });
  } else {
    const nameSpace = `${this.nameSpacePrefix}${namespace}`;
    if (!Vue.prototype.$services[nameSpace]) {
      Vue.prototype.$services[nameSpace] = {};
    }
    Object.keys(servicesJson).forEach((key) => {
      if (key && servicesJson[key]) {
        Vue.prototype.$services[nameSpace][key] = servicesJson[key];
      }
    });
  }
};

ServiceRegisterClass.prototype.findService = function(key, Space) {
  const services = Space ? Vue.prototype.$services[Space] : Vue.prototype.$services;
  let res = null;
  Object.keys(services).forEach((iKey) => {
    if (iKey === key) {
      res = services[key]
    } else if (iKey.indexOf(this.nameSpacePrefix) !== -1) {
      const rul = this.findService(key, iKey);
      if (rul) res = rul;
    }
  });

  return res;
}

ServiceRegisterClass.prototype.findServiceParent = function(key, Space) {
  const services = Space ? Vue.prototype.$services[Space] : Vue.prototype.$services;
  let res = null;
  Object.keys(services).forEach((iKey) => {
    if (iKey === key) {
      res = services;
    } else if (iKey.indexOf(this.nameSpacePrefix) !== -1) {
      const rul = this.findService(key, iKey);
      if (rul) res = rul;
    }
  });

  return res;
}

ServiceRegisterClass.prototype.cancellation = function(key) {
  const parent = this.findServiceParent(key);
  if (parent) {
    delete parent[key];
  }
}

export default new ServiceRegisterClass();
