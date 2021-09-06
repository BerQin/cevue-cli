import Vue from 'vue';

function ServiceRegisterClass() {
  Vue.prototype.$services = {};
}

ServiceRegisterClass.prototype.register = function (servicesJson, namespace) {
  if (!namespace) {
    Object.keys(servicesJson).forEach((key) => {
      if (key && servicesJson[key]) {
        Vue.prototype.$services[key] = servicesJson[key];
      }
    });
  }
};

export default new ServiceRegisterClass();
