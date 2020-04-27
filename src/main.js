// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/iconfont.css'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './css/tableHight.css'
// import mixin from './mixin/mixin'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUi)
// Vue.mixin(mixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
