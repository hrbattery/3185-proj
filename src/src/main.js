import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './router'
import vuetify from '@/plugins/vuetify'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vuetify)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')


