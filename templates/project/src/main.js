import Vue from 'vue';

import { ServiceRegisterClass } from './core/common';

// vue-video-player
import VideoPlayer from 'vue-video-player/src';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';
Vue.use(VideoPlayer);
// endvue-video-player

// babel-polyfill
import 'babel-polyfill';
// endbabel-polyfill

// echarts
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// endecharts

// moment-timezone
import moment from 'moment-timezone';
Vue.prototype.$moment = moment;
// endmoment-timezone

// element-ui
import ElementUI from 'element-ui';
const Message = ElementUI.messages;
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

// vue-i18n
import VueI18n from 'vue-i18n';
import { I18nService } from '@/service';
import i18nText from './i18n';
Vue.use(VueI18n);
ServiceRegisterClass.register({
  I18nService: new I18nService(),
});
Vue.prototype.$services.I18nService.i18n = new VueI18n({
  locale: 'zh',
  messages: i18nText,
});
// endvue-i18n

import App from './App.vue';
import filters from './filters';
import router from './router';
// 引入指令
import Directives from './directives';
// 引入拦截器
import '@/router/Interceptor.Router';

// http
import { api } from './request';
import { UserService } from './service';

ServiceRegisterClass.register({
  UserService: new UserService(),
});

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$message = Message;

// 加入所有的filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]); //插入过滤器名和对应方法
});

Vue.use(ElementUI, {
  size: 'small',
  // vue-i18n
  i18n: (key, value) => Vue.prototype.$services.I18nService.i18n.t(key, value),
  // endvue-i18n
});

// 注册指令
Object.keys(Directives).forEach((key) => {
  if (Directives[key]) {
    Vue.directive(key, Directives[key]);
  }
});

new Vue({
  router,
  // vue-i18n
  i18n: Vue.prototype.$services.I18nService.i18n,
  // endvue-i18n
  render: (h) => h(App),
}).$mount('#app');
