import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login')
  },
  {
    path: '/upload',
    name: 'Upload',
    component: () => import('../views/qiniuUpload')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/test')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/order')
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: () => import('../views/recharge')
  }
]

const router = new VueRouter({
  routes
})

export default router
