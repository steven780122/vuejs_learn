import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'    // @在webpack.base.conf.js中有定義，其實就是src別名
import GoodsList from './../views/GoodsList.vue'    // ./是router當前目錄../再到上一層 去找views

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/goods/:goodsId/user/:name',     //動態路由
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
