import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import AppLogin from '../components/login/AppLogin'
import AppSignup from '../components/login/AppSignup'
import AppForum from '../components/forum/AppForum'
import AppLogout from '../components/login/AppLogout'
import AppQuestionDetail from '../components/forum/AppQuestionDetail'
import AppCreateQuestion from '../components/forum/AppCreateQuestion'

const routes = [
  { path: '/login', component: AppLogin },
  { path: '/signup', component: AppSignup },
  { path: '/logout', component: AppLogout },
  { path: '/ask', component: AppCreateQuestion },
  { path: '/forum', component: AppForum, name:'forum'},
  { path: '/question/:slug', component:AppQuestionDetail, name:'question'}
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  hasBang :false,
  mode : 'history'
})

export default router
