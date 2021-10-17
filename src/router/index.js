import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Reference from '@/views/Reference.vue'
import SpecificRef from '@/views/SpecificRef.vue'

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
  {
    path: '/reference/:name',
    name: 'reference of :name',
    component: SpecificRef
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
