import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'
Vue.config.productionTip = false
const routerPush=Router.prototype.push
Router.prototype.push=function push(location) {
  return routerPush.call(this,location).catch(error=>error)

}
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
