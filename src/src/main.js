import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routers from './router'
import vuetify from '@/plugins/vuetify'
import Axios from 'axios'
// import 'highlight.js/styles/github.css'
// import 'github-markdown-css/github-markdown.css'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vuetify)
Vue.use(Axios)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')


