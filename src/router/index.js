import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // 绑定id
    path:'/user/:id',
    name:'user',
    component:User
  }
]

const router = new VueRouter({
  routes
})

export default router
