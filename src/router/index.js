import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login/LoginIndex.vue'
import Home from '@/components/banner1/exeact.vue'
import UserEdit from '@/components/userEdit/userEdit.vue'
import securityEdit from "@/components/securityEdit/securityEdit.vue"
import noticeEdit from "@/components/noticeEdit/noticeEdit.vue"
import profile from "@/components/userEdit/profile.vue"
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
    },
    {
      path:'/userEdit',
      name:'UserEdit',
      component: UserEdit,
      redirect:'/userEdit/profile',
      children:[
        {
          path:'profile',
          name:'Profile',
          component:profile
        },
        {
          path:'securityEdit',
          name:'SecurityEdit',
          component:securityEdit
        },
        {
          path:'noticeEdit',
          name:'NoticeEdit',
          component:noticeEdit
        }
      ]

    }
  ],
})

export default router
