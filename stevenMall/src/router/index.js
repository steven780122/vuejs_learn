import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'    // @在webpack.base.conf.js中有定義，其實就是src別名
import GoodsList from './../views/GoodsList.vue'    // ./是router當前目錄../再到上一層 去找views
import Title from '@/views/Title'    //  @/  即src/
import Image from '@/views/Image'
import Cart from '@/views/Cart'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    { path: '/goods',
      name: 'GoodsList',
      components: {           // 左邊的key就是根據App.js的router-view的name的值，右邊就是其對應的組件!
        default: GoodsList,
        title: Title,
        img: Image
      }            // 因為會加載3個視圖(router-view)，因此由原本的component改為components
    
    },
    // {
    //   path: '/goods/:goodsId/user/:name',     //動態路由
    //   name: 'GoodsList',
    //   component: GoodsList
    // }
    // {
    //   path: '/goods',    
    //   name: 'GoodsList',
    //   component: GoodsList
      
    //   //     children:[{          // 子路由
    //   //       path: 'title',     // 前面不可以加'/'
    //   //       name: 'title',
    //   //       component: Title  //不是components:{}
    //   //     },
    //   //     {
    //   //       path: 'img',     // 前面不可以加'/'
    //   //       name: 'img',
    //   //       component: Image
    //   //     }
    //   // ]
    // },

    {
      path: '/cart',
      name: 'cart',
      component: Cart,
          children:[{         
            path: ':cartId',     
            name: 'cartid',
            component: Cart  
          }
      ]


    }

  ]
})
