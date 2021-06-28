import Vue from 'vue';

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
import I18n from '@/service/i18n';
import i18nText from './i18n';
Vue.use(VueI18n);
I18n.i18n = new VueI18n({
  locale: 'zh',
  messages: i18nText
});
// endvue-i18n

import App from './App.vue';
import filters from './filters';
import router from './router';
// 引入指令
import '@/directive/directives';
// 引入拦截器
import '@/router/interceptor.router';

// http
import api from "./request/api";
import request from "./request/request";


Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$request = request;
Vue.prototype.$message = Message;

// 加入所有的filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key,filters[key]) //插入过滤器名和对应方法
})

Vue.use(ElementUI, {
  size: 'small',
  // vue-i18n
  i18n: (key, value) => I18n.i18n.t(key, value)
  // endvue-i18n
});

new Vue({
    router,
    // vue-i18n
    i18n: I18n.i18n,
    // endvue-i18n
    render: h => h(App)
}).$mount('#app');
