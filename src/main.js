import Vue from 'vue'
import Default from './layouts/default.vue'

Vue.config.productionTip = false

//引入基础样式
import './assets/css/base.css';
//引入字体比例控制
import './assets/font/font.js';

import router from "./plugins/router.js"

//引入拦截器的配置
import './plugins/axios.js'

//安装全局过滤器
import filters from './filters';
Object.keys(filters).map(key=>Vue.filter(key,filters[key]))

//扩展Vue实例属性
import {baseUrl} from './config/base.js';
Vue.prototype.$baseUrl=baseUrl;

let vm = new Vue({
  data:{
	  bLoading:true
  },
  router,
  render: h => h(Default),
}).$mount('#app')

export default vm;
