import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import We from './views/We.vue'
import List from './views/List.vue'
import About from './views/About.vue'
import Detail from './views/Detail.vue'
import Login from './views/Login.vue'







Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/we',
      name: 'we',
      component: We
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
     // 重定向
     {
      path: '/',
      // 别名
      // alias: '/index.html',
      redirect: () => {
          // 我要跳进/123获取路由的一些详情信息
          // console.log(to)
          // 方法接收 目标路由 作为参数
          // return 重定向的 字符串路径/路径对象
          return '/home'
      }
  }
  ],
  
})
