<template>
  <div class="HeroSiteTop">
     <div class="pvp-logo"></div>
     <div class="main-logo"></div>
     <div class="header_nav"> 
        <div class="nav-index" :class="{'nav-active':HeroSite===item.id}" v-for="item in HeroSiteItem" :key="item.id" @click="selectItem(item)">
          {{item.name}}
          <cite>{{item.info}}</cite>
        </div>
     </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const HeroSiteItem = ref(
  [
    {id:1, name:'首页',     info:'HOME',   path:'/HeroSite/home'},
    {id:2, name:'皮肤',     info:'SKIN',   path:'/HeroSite/skin'},
    {id:3, name:'英雄',     info:'HERO',   path:'/HeroSite/hero'},
    {id:4, name:'玩法',     info:'MODE',   path:'/HeroSite/mode'},
    {id:5, name:'系统',     info:'SYSTEM', path:'/HeroSite/system'},
    {id:6, name:'美术优化', info:'ARTS',   path:'/HeroSite/arts'},
  ]
)
const selectItem = (item) => {
  router.push(item.path)
}
// 选中态：详情页 /HeroSite/skin/1 也要高亮「皮肤」
const HeroSite = computed(() => {
  const match = [...HeroSiteItem.value]
    .sort((a, b) => b.path.length - a.path.length)
    .find(
      (i) => route.path === i.path || route.path.startsWith(i.path + '/')
    )
  return match ? match.id : 1
})
</script>


<style scoped lang="scss">
.HeroSiteTop{
  width:1200px;
  margin:0 auto;
  height:80px;
  position:fixed;
  z-index: 999;
  top:0;
  left:254px;
}
/* 横跨全屏的半透明黑色背景条（不随 1200px 内容宽度限制） */
.HeroSiteTop::before{
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: rgba(0, 0, 0, 0.35);
  z-index: -1;
}
.pvp-logo{
  background:url('/image/banner1/bannerToplogo.webp') right center no-repeat;
  width:192px;
  height:51px;
  position:absolute;
  left:-232px;
  top:14px;
}
.main-logo{
    background: url('/image/banner1/main-logo (1).webp') right center no-repeat;
    width: 120px;
    height: 72px;
    position: absolute;
    left: -34px;
    top: 8px;
}
.header_nav{
    position: relative;
    z-index: 2;
    float: left;
    margin-left: 130px;
    height: 80px;
    width: 806px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-index{
    color: rgba(255, 255, 255, 0.85);
    font-size: 16px;
    padding: 0 24px;
    height: 62px;
    display: inline-block;
    text-align: center;
    margin-top: 16px;
    cursor: pointer;
}
.nav-index cite{
    display: block;
    font-style: normal;
    color: rgba(255, 255, 255, 0.55);
    font-size: 10px;
}
.nav-active{
    color: #c39b5e;
    border-bottom: 2px solid #c39b5e;
}
.nav-active cite{
    color: #c39b5e;
}
</style>