<template>
    <!-- 第二层黑条：新皮肤信息 + 锚点；滚过顶栏后吸顶 -->
    <div class="sub-header" v-show="route.name==='HeroSkinDetail'">
      <div class="sub-cont">
         <div class="sub-text">
          <p class="titF">新皮肤</p>
          <p class="titS">
            <span>{{skinShortName}}</span>
          </p>
         </div>
          <div class="sub-list">
          <ul>
            <li 
            :class="{on:activeDefult===item.id}"
             v-for="item in activeHero" 
             :key="item.id" 
             @click="activeHeros(item.id)">
              <div class='showHero'>
               {{ item.name }}
              </div>
            </li>
          </ul>
         </div> 
        </div>
    </div>
       <div class="sub-header" v-show="route.name==='HeroDetail'">
      <div class="sub-cont">
         <div class="sub-text">
          <p class="titF">新英雄</p>
          <p class="titS">
            <span>{{skinHero.name}}</span>
            <span>{{skinHero.desc}}</span>
          </p>
         </div>
          <div class="sub-list">
          <ul>
            <li 
            :class="{on:HeroItemList===item.id}"
             v-for="item in HeroItem" 
             :key="item.id" 
             @click="aHerosList(item.id)">
              <div class='showHero'>
               {{ item.name }}
              </div>
            </li>
          </ul>
         </div> 
        </div>
    </div>
</template>

<script setup>
import { computed, ref, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getSkinById } from '@/utils/HeroList.js'
import {getHeroById} from '@/utils/HeroItem.js'
const route = useRoute()
const skin = computed(() => getSkinById(route.params.id))
const skinHero = computed(()=> getHeroById(route.params.id))
const activeDefult = ref(1)
const HeroItemList = ref(1)
const activeHero = ref([
  {id:1,name:'皮肤展示'},
  {id:2,name:'灵感特性'}
])
const HeroItem = ref([
  {id:1,name:'英雄介绍'},
  {id:2,name:'玩法思路'},
  {id:3,name:'设计思路'}

])
const activeHeros = (id)=>{
  activeDefult.value = id
   nextTick(() => {
    // 根据 id 找不同目标（皮肤展示 / 灵感特性）
    const target = id === 1
      ? document.querySelector('.head-title')   // 皮肤展示
      : document.querySelector('.skin-feature')  // 灵感特性，换成你实际的 class

    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
const aHerosList = (id)=>{
  HeroItemList.value = id
   nextTick(() => {
    // 根据 id 找不同目标（皮肤展示 / 灵感特性）
    const target = id === 1
      ? document.querySelector('.head-title')   // 皮肤展示
      : document.querySelector('.hero-play-think')  // 灵感特性，换成你实际的 class

    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
// 「烈焰狂欢-卢雅那」→ 显示「烈焰狂欢」
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
.sub-header {
  width: 100%;
  height: 70px;
  background-color: #000;
  z-index: 998;
  /* 在 .HeroSiteHome 滚动容器内吸顶 */
  position: sticky;
  top: 0;
}

.sub-cont {
    width: 100%;
    overflow: hidden;
}
.sub-text{
  position:absolute;
  left:0;
  top:12px;
  border-right:1px solid rgba(255, 255, 255,0.2);
  height:39px;
  padding:0 60px 0 45px;
  .titF{
    font-size:14px;
    letter-spacing:0px;
    color:#c39b5e;
  }
  .titS{
    font-size:18px;
    letter-spacing:0px;
    color:#f2d2a2;
  }
  .titS span:first-child{
    margin-right:15px;
  }
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
.showHero:hover{
  text-decoration:underline;
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
</style>