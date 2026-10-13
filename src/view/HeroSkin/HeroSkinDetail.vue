<template>
  <div class="skin-detail-page">
    <!-- 第二层黑条：新皮肤信息 + 锚点；滚过顶栏后吸顶 -->
    <HeroSkinList></HeroSkinList>
    <!-- banner图 -->
     <div class="pageBanner">
      <div class="banner">
        <img :src="skin.images || skin.img"></img>
      </div>
     </div>
     <!-- 皮肤简介 -->
     <div class="head-title skin-head">
      <div class="wrap">
        <div class="head-ph">
          <img :src="skin.Heroavator">
        </div>
         <img :src="skin.image" class="head-grade"></img>
        <div class="head-name">
          <span>{{skinShortName}}</span>
          <span class="head-hero-name">{{skinFullName}}</span>
        </div>
        <p class="head-desc">{{skin.desc}}</p>
        <p class="head-desc" style="margin-top:10px;">{{skin.getWay}}</p>
      </div>
     </div>

     <!-- 皮肤效果展示 -->
      <HeroSkinShow></HeroSkinShow>
      <!-- 技能效果展示 -->
      <HeroSkinSkill></HeroSkinSkill>
      <!-- 灵感及特性 -->
       <HeroSkinInsight></HeroSkinInsight>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getSkinById } from '@/utils/HeroList.js'
import HeroSkinShow from './HeroSkinShow.vue'
import HeroSkinSkill from "./HeroSkinSkill.vue"
import HeroSkinInsight from './HeroSkinInsight.vue'
import HeroSkinList from "./HeroSkinList.vue"
const route = useRoute()
const skin = computed(() => getSkinById(route.params.id))
// 「烈焰狂欢-卢雅那」→ 显示「烈焰狂欢」/「卢雅那」
const skinShortName = computed(() => {
  if (!skin.value?.name) return ''
  return skin.value.name.split('-')[0]
})
const skinFullName = computed(() => {
  if (!skin.value?.name) return ''
  return skin.value.name.split('-')[1] || ''
})
</script>

<style lang="scss" scoped>
.skin-detail-page {
  position: relative;
}
.head-title {
  scroll-margin-top: 70px; // 和 .sub-header 高度一致
}
.sub-list{
  width:1200px;
  overflow:hidden;
  margin:0 auto;
  text-align:center;
  ul{
    padding:0;
    list-style:none;
  }
  li{
    display:inline-block;
    list-style:none;
  }
}
.sub-list li.on .showHero{
    color: #c39b5e;
    font-weight: bold;
}
.sub-list li .showHero {
    cursor: pointer;
    display: block;
    line-height: 70px;
    font-size: 14px;
    color: #a59e94;
    margin-right: 70px;
}
.sub-list li .showHero::after{
  content: none;
}
.sub-list li:first-child .showHero::after{
  content:'';
  width:60px;
  height:3px;
  background:url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
  background-position-x:-126px;
  background-position-y:-159px;
  display:block;
  position:relative;
  top:-36px;
  left:63px;
}
.showHero:hover{
  text-decoration:underline;
}
.sub-skin-name {
  display: block;
  margin-top: 4px;
  font-size: 18px;
  color: #fff;
  letter-spacing: 1px;
}

.sub-tabs {
  position: relative;
  display: flex;
  align-items: center;
  gap: 18px;
  height: 100%;
  padding-top: 2px;
  /* 右侧 tab 上方金色指示线 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #c39b5e;
  }
}

.sub-tab {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  padding: 6px 0;
  line-height: 1;

  &.active,
  &:hover {
    color: #c39b5e;
  }
}

.sub-split {
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.45);
}
.pageBanner{
  width:100%;
  text-align:center;
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
    content:'';
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:50%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
  }
}

.skin-head{
  height:350px;
  padding-bottom:40px;
}
.head-title{
  top:0;
  margin-top:-300px;
  position:relative;
  width:100%;
  .wrap{
    width:1200px;
    margin:0 auto;
    text-align:center;
    background:none;
  }
  .head-ph{
    background:url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
    width:100%;
    height:144px;
    img{
      width:120px;
      height:120px;
      border-radius:50%;
      margin-top:11px;
    }
  }
  .head-grade{
    display:block;
    margin:38px auto 0;
  }
  .head-name{
    margin-bottom:25px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 60px;
    line-height: 60px;
    color:#c39b5e;
    margin-top:32px;
  }
  .head-name span:first-child{
        margin-right: 35px;
  }
  .head-desc{
    margin-top:0;
    white-space: pre;
    font-style: normal;
    font-size: 20px;
    color: #a3a19e;
  }
}

</style>
