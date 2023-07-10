import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import TestsChose from "../components/TestsChose.vue";
import TestPage from "../views/TestPage.vue";
import AboutView from "../views/AboutView.vue";
import TestPageMiddle from "@/views/TestPageMiddle.vue";
import TestPageLight from "@/views/TestPageLight.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tests',
    name: 'tests',
    component: TestsChose
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/javascript-strong',
    name: 'javascript-strong',
    component: TestPage
  },
  {
    path: '/javascript-middle',
    name: 'javascript-middle',
    component: TestPageMiddle
  },
  {
    path: '/javascript-light',
    name: 'javascript-light',
    component: TestPageLight
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
