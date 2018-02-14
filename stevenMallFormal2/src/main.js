// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'   // 因為router也改為export let XXX = new router  改寫法如下
import {router} from './router'


// import {sum, minus} from './util'
// console.log(`sum:${sum(1, 6)}`);
// console.log(`minus:${minus(6, 1)}`);


// // 也可以用import * as XXX再到下面調用函數:
// import * as util from './util'
// console.log(`sum:${util.sum(1, 6)}`);
// console.log(`minus:${util.minus(6, 1)}`);


Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({     // 整個頁面的入口
  el: '#app',    // 設置app的監聽對象   對應到index.html的id
  router, // 用到的router
  template: '<App/>', 
  components: { App }
})

// new Vue({     // 整個頁面的入口
//   router, // 用到的router
//   template: '<App/>',   // 用到的template
//   components: { App }
// }).$mount("#app");   // 不用el可以用$mount


