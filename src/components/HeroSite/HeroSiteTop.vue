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
import { ref } from 'vue'
const HeroSite = ref(1)
const HeroSiteItem = ref(
  [
    {id:1,name:'首页',info:'HOME',path:''},
    {id:2,name:'皮肤',info:'SKIN',path:''},
    {id:3,name:'英雄',info:'HERO',path:''},
    {id:4,name:'玩法',info:'MODE',path:''},
    {id:5,name:'系统',info:'SYSTEM',path:''},
    {id:6,name:'美术优化',info:'ARTS',path:''},
  ]
)
const selectItem = (item) =>{
  HeroSite.value = item.id
}
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
    color: #6e6a63;
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
    color: #464441;
    font-size: 10px;
}
.nav-active{
    color: #c39b5e;
    border-bottom: 2px solid #c39b5e;
}
</style>