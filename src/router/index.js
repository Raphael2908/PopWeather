import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Reference from '@/views/Reference.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reference',
    name: 'reference',
    component: Reference
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
