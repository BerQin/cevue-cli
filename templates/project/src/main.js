import Vue from 'vue';

// 视频播放
import VideoPlayer from 'vue-video-player/src';
import 'vue-video-player/src/custom-theme.css';
import 'video.js/dist/video-js.css';

// 兼容低版本
import 'babel-polyfill';

// echarts
import * as echarts from 'echarts';

// 时间插件
import moment from 'moment-timezone';

// element-ui
import ElementUI from 'element-ui';
const Message = ElementUI.messages;
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题

// 国际化
import VueI18n from 'vue-i18n';
import I18n from '@/service/i18n';
import i18nText from './i18n';

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

Vue.use(VueI18n);
Vue.use(VideoPlayer);

Vue.config.productionTip = false;
I18n.i18n = new VueI18n({
  locale: 'zh',
  messages: i18nText
});

Vue.prototype.$api = api;
Vue.prototype.$request = request;

Vue.prototype.$moment = moment;
Vue.prototype.$message = Message;

// echart
Vue.prototype.$echarts = echarts;

// 加入所有的filter
Object.keys(filters).forEach((key) => {
  Vue.filter(key,filters[key]) //插入过滤器名和对应方法
})

Vue.use(ElementUI, {
  size: 'small',
  i18n: (key, value) => I18n.i18n.t(key, value)
});

new Vue({
    router,
    i18n: I18n.i18n,
    render: h => h(App)
}).$mount('#app');
