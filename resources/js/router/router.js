import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import AppLogin from '../components/login/AppLogin'

const routes = [
  { path: '/login', component: AppLogin }
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  hasBang :false,
  mode : 'history'
})

export default router
