import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/AboutJS',
        name: 'AboutJS',
        component: () => import( '../views/AboutJs/AboutJS.vue')
      },
      {
        path: '/AbouEexperience',
        name: 'AbouEexperience',
        component: () => import( '../views/AbouEexperience/AbouEexperience.vue')
      },
      {
        path: '/AboutThree',
        name: 'AboutThree',
        component: () => import( '../views/AboutThree/AboutThree.vue')
      },
      {
        path: '/AboutVue',
        name: 'AboutVue',
        component: () => import( '../views/AboutVue/AboutVue.vue')
      }

    ]


  },

]

const router = createRouter({
  mode:history,
  history: createWebHashHistory(),
  routes
})

export default router
