<template>
  <div class="content">
  <HeroSkinList></HeroSkinList>
  <div class="pageBanner">
     <div class="banner">
      <img :src="skinHero.mainImage"></img>
     </div>
  </div>
  <div class="head-title">
      <div class="wrap">
        <div class="head-ph">
          <img :src="skinHero.avImage">
        </div>
        <div class="head-name">
            <span>{{skinHero.desc}}</span>
            <span>{{skinHero.name}}</span>
        </div>
      </div>
  </div>
  <!-- 英雄概括 -->
  <HeroProfile :hero="skinHero"></HeroProfile>
  <!-- 玩法思路 -->
  <HeroApproach :hero="skinHero"></HeroApproach>
  <!-- 设计思路 -->
  <HeroDesign :hero="skinHero"></HeroDesign>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import HeroSkinList from '../../view/HeroSkin/HeroSkinList.vue'
import HeroApproach from './HeroApproach.vue'
import HeroProfile from './HeroProfile.vue'
import HeroDesign from './HeroDesign.vue'
import {getHeroById} from '@/utils/HeroItem.js'
import {useRoute} from 'vue-router'
const route = useRoute()
const skinHero = computed(()=> getHeroById(route.params.id))
</script>

<style lang="scss" scoped>
.content{
   width:100%;
   margin:auto;
}
.pageBanner{
  width:100%;
  text-align: center;
  .banner{
    min-width:1200px;
    margin:auto;
    width:100%;
    max-width:1920px;
    position:relative;
    img{
      width:100%;
    }
    }
    .banner::after{
      content: '';
      position:absolute;
      left:0;
      bottom:0;
      width:100%;
      height:50%;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
    }
}
.head-title{
  top:0;
  /* 叠到 banner 上；需固定高度，否则负 margin 会把后面的 footer 一起拉上来 */
  margin-top:-300px;
  height: 310px;
  position: relative;
  width: 100%;
  .wrap{
    width:1200px;
    margin:0 auto;
    text-align: center;
    background:none;
  }
  .head-ph{
     background:url('/image/HeroSite/heroIcon-bg.webp') top center no-repeat;
     width:100%;
     height:144px;
     img{
      width:120px;
      height:120px;
      border-radius:50%;
      margin-top:11px;
     }
  }
  .head-name{
    font-size:60px;
    line-height:60px;
    color:#c39b5e;
    margin-top:32px;
    span{
      margin-right:35px;
    }
  }
}
.head-title {
  scroll-margin-top: 70px; // 和 .sub-header 高度一致
}
</style>