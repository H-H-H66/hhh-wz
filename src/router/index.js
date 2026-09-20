import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login/LoginIndex.vue'
import Home from '@/components/banner1/exeact.vue'
import UserEdit from '@/components/userEdit/userEdit.vue'
import securityEdit from "@/components/securityEdit/securityEdit.vue"
import noticeEdit from "@/components/noticeEdit/noticeEdit.vue"
import profile from "@/components/userEdit/profile.vue"
import VersionZone from '@/view/VersionZone/VersionZone.vue'
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
          component:profile,
          meta:{title:'个人资料'}
        },
        {
          path:'securityEdit',
          name:'SecurityEdit',
          component:securityEdit,
          meta:{title:'安全设置'}
        },
        {
          path:'noticeEdit',
          name:'NoticeEdit',
          component:noticeEdit,
          meta:{title:'消息设置'}
        }
      ]

    },
    {
      path:'/VersionZone',
      name:'VersionZone',
      component:VersionZone,
      meta:{title:'版本信息'}
    }
  ],
})

export default router
