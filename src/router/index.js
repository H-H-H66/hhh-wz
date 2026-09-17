import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login/LoginIndex.vue'
import Home from '@/components/banner1/exeact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
})

export default router
