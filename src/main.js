import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);
Vue.use(ElementUI);

//引入import { Cosmograph } from '@cosmograph/cosmograph'
// import { Cosmograph } from '@cosmograph/cosmograph';
// import { Graph } from '../../node_modules/@cosmograph/cosmos';

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';

// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';

import axios from 'axios';


//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;
//把方法放到vue的原型上，这样就可以全局使用了

new Vue({
  router,
  axios,
  store,
  render: (h) => h(App),
}).$mount('#app');
export const EventBus = new Vue();