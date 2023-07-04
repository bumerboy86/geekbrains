import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/javascript-strong',
    name: 'javascript-strong',
    component: () => import(/* webpackChunkName: "javascript-strong" */ '../views/TestPage.vue')
  },
  {
    path: '/javascript-middle',
    name: 'javascript-middle',
    component: () => import(/* webpackChunkName: "javascript-middle" */ '../views/TestPageMiddle.vue')
  },
  {
    path: '/javascript-light',
    name: 'javascript-light',
    component: () => import(/* webpackChunkName: "javascript-middle" */ '../views/TestPageLight.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
