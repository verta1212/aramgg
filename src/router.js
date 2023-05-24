import { createWebHistory, createRouter } from "vue-router";
import Summoner from './components/Summoner.vue'
import Home from './components/Home.vue'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/summoner/:id',
    component: Summoner
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition){ // eslint-disable-line no-unused-vars
    return { top: 0 }
  }
});

export default router; 