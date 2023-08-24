// 路由的js文件
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/view/index/index'

Vue.use(Router)

export default new Router({
  // 路由地址
  routes: [ 
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
