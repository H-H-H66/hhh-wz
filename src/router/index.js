import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/components/Login/LoginIndex.vue'
import Home from '@/components/banner1/exeact.vue'
import UserEdit from '@/components/userEdit/userEdit.vue'
import securityEdit from "@/components/securityEdit/securityEdit.vue"
import noticeEdit from "@/components/noticeEdit/noticeEdit.vue"
import profile from "@/components/userEdit/profile.vue"
import VersionZone from '@/view/VersionZone/VersionZone.vue'
import Hreo from "@/view/HreoList/Hreo.vue"
import HeroItem from "@/components/HeroItem/HeroItem.vue"
import HeroSpell from "@/components/HeroSpell/HeroSpell.vue"
import HeroList from "@/components/HeroList/HeroList.vue"
import HeroSite from "@/view/LeakSite/HeroSite.vue"
import HeroSkin from '@/view/HeroSkin/HeroSkin.vue'
import HeroSiteHome from '@/components/HeroSite/HeroSiteHome.vue'
import HeroSiteSkin from '@/components/HeroSite/HeroSiteSkin.vue'
import HeroSiteHero from '@/components/HeroSite/HeroSiteHero.vue'
import HeroSiteMode from '@/components/HeroSite/HeroSiteMode.vue'
import HeroSiteSystem from '@/components/HeroSite/HeroSiteSystem.vue'
import HeroSiteArts from '@/components/HeroSite/HeroSiteArts.vue'
import HeroSkinDetail from '@/view/HeroSkin/HeroSkinDetail.vue'
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
    },
    {
      path:'/hero',
      name:'Hero',
      component:Hreo,
      redirect:'/hero/hero',
      children:[
        {
          path:'hero',
          name:'HeroList',
          component: HeroList,
          meta:{title:'英雄列表'}
        },
        {
          path:'heroItem',
          name:'HeroItem',
          component:HeroItem,
          meta:{title:'局内道具'}
        },
        {
          path:'heroSpell',
          name:'HeroSpell',
          component:HeroSpell,
          meta:{title:'召唤师技能'}
        }
      ]
    },
    {
      path:'/HeroSite',
      name:'HeroSite',
      component:HeroSite,
      redirect:'/HeroSite/home',
      meta:{title:'爆料站'},
      children:[
        {
          path:'home',
          name:'HeroSiteHome',
          component: HeroSiteHome,
          meta:{title:'首页'}
        },
        {
          path:'skin',
          name:'HeroSkin',
          component: HeroSkin,
          meta:{title:'皮肤'}
        },
        {
          path:'skin/:id',
          name:'HeroSkinDetail',
          component: HeroSkinDetail,
          meta:{title:'皮肤详情'}
        },
        {
          path:'hero',
          name:'HeroSiteHero',
          component: HeroSiteHero,
          meta:{title:'英雄'}
        },
        {
          path:'mode',
          name:'HeroSiteMode',
          component: HeroSiteMode,
          meta:{title:'玩法'}
        },
        {
          path:'system',
          name:'HeroSiteSystem',
          component: HeroSiteSystem,
          meta:{title:'系统'}
        },
        {
          path:'arts',
          name:'HeroSiteArts',
          component: HeroSiteArts,
          meta:{title:'美术优化'}
        }
      ]
    }
  ],
})

export default router
