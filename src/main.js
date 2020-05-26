import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import Router from 'vue-router'



Vue.use(ElementUI);
Vue.config.productionTip = false
const routerPush=Router.prototype.push
Router.prototype.push=function push(location) {
  return routerPush.call(this,location).catch(error=>error)

}
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
