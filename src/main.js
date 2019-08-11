import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant的组件
import Vant from './vant/index'
Vant()
import axios from 'axios'
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

