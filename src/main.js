// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'    //vuex最核心的管理对象store

import element from 'element-ui'

Vue.config.productionTip = false //禁止在Vue启动时的生产提示


//自定义全局事件总线
Vue.prototype.$eventBus = new Vue()
Vue.use(element)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  render: h => h(App),
  router,  //配置路由器
  store,   //配置vuex的store
})
