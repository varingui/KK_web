import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import Blog from '../views/blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})

export default router
