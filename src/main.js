import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vant的组件
import Vant from './vant/index'
//引入仓库
import store from './stores/stores'
Vant()
import axios from 'axios'
Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

