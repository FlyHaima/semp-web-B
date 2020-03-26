import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import PageA from '@/views/pageA'
import PageB from '@/views/pageB'
import LoginA from '@/views/loginA'
import LoginB from '@/views/loginB'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/pageA',
    name: 'PageA',
    component: PageA,
    children: [
      {
        path: 'login',
        name: 'PageALogin',
        component: LoginA
      },
      {
        path: 'index',
        name: 'PageAIndex',
        component: Index
      }
    ]
  },
  {
    path: '/pageB',
    name: 'PageB',
    component: PageB,
    children: [
      {
        path: 'login',
        name: 'PageBLogin',
        component: LoginB
      },
      {
        path: 'index',
        name: 'PageBIndex',
        component: Index
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
