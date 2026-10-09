<template>
  <div class="hero-adjust hero-list">
      <div class="wrap-list">
        <div class="wrap-tit">
           <h3>最新皮肤</h3>
        </div>
        <div class="wrap-content">
          <div class="adjust-list">
            <ul>
              <li v-for="HeroItem in skinList" :key="HeroItem.id" @click="GotoHeroDetail(HeroItem.id)">
                <div class="SkinItem">
                   <img :src="HeroItem.image" class="adjust-label2"></img>
                   <div class="adjust-img">
                    <img :src="HeroItem.img">
                   </div>
                </div>
                <div class="adjust-cont">
                  <p class="adjust-desc">{{ HeroItem.desc }}</p>
                  <p class="adjust-name">{{ HeroItem.name }}</p>
                  <p class="adjust-time">{{ HeroItem.time }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useRouter,useRoute} from 'vue-router'
import {skinList,getSkinById} from '@/utils/HeroList.js'
const router = useRouter()
const route= useRoute()
// const HeroListSite = ref([
//   {
//     id:1,
//     name:'烈焰狂欢-卢雅那',
//     desc:'环刃飞转，属于我的时刻，才刚开始呢！',
//     img:'/image/HeroSite/NewSite/Hero/lyn.png',
//     time:'20261001',
//     image:'/image/HeroSite/NewSite/yz.png'
//   },
//   {
//     id:2,
//     name:'云端乐园-孙尚香',
//     desc:'云端造梦，笑容改变世界!',
//     img:'/image/HeroSite/NewSite/Hero/ssx.jpg',
//     time:'20260923',
//     image:'/image/HeroSite/NewSite/ws.webp'
//   },
//   {
//     id:3,
//     name:'帕恰狗之风-孙膑',
//     desc:'随心逐浪，扬帆起航！',
//     img:'/image/HeroSite/NewSite/Hero/sb.jpg',
//     time:'20260924',
//     image:'/image/HeroSite/NewSite/po.webp'
//   },
//   {
//     id:4,
//     name:'旅行日记-亚瑟',
//     desc:'心有所向，路有所往',
//     img:'/image/HeroSite/NewSite/Hero/ys.jpg',
//     time:'20260923',
//     image:'/image/HeroSite/NewSite/s45.png'
//   },
//   {
//     id:5,
//     name:'旅行日记-安琪拉',
//     desc:'心有所向，路有所往',
//     img:'/image/HeroSite/NewSite/Hero/aql.jpg',
//     time:'20260923',
//     image:'/image/HeroSite/NewSite/s45.png'
//   },
//   {
//     id:6,
//     name:'月影弦鸣-伽罗',
//     desc:'月华所指，胜利将至',
//     img:'/image/HeroSite/NewSite/Hero/jl.jpg',
//     time:'20260929',
//     image:'/image/HeroSite/NewSite/yz.png'
//   },
//   {
//     id:7,
//     name:'督灵司正-刘备',
//     desc:'督灵司长官一人一枪行走世间，用困灵法阵抑制灵气暴动，履行着守护世间的责任。',
//     img:'/image/HeroSite/NewSite/Hero/lb.jpg',
//     time:'20260910',
//     image:'/image/HeroSite/NewSite/ss.png'
//   },
//   {
//     id:8,
//     name:'铁影缉凶-狂铁',
//     desc:'铁影掠过暗巷，罪恶无处躲藏',
//     img:'/image/HeroSite/NewSite/Hero/kt.jpg',
//     time:'20260910',
//     image:'/image/HeroSite/NewSite/yz.png'
//   },
//   {
//     id:9,
//     name:'碎光执事-公孙离',
//     desc:'水晶为鉴，誓言不渝',
//     img:'/image/HeroSite/NewSite/Hero/gsl.jpg',
//     time:'20260909',
//     image:'/image/HeroSite/NewSite/ws.png'
//   },
//   {
//     id:10,
//     name:'小李飞刀-狄仁杰',
//     desc:'古龙小说正版授权',
//     img:'/image/HeroSite/NewSite/Hero/drj.jpg',
//     time:'20260819',
//     image:'/image/HeroSite/NewSite/xl.png'
//   }
// ]) 
//路由跳转到皮肤的详情页
const GotoHeroDetail = (id)=>{
  router.push({
    name:'HeroSkinDetail',
    params:{id:id}
  })
}
</script>

<style scoped>
.hero-adjust {
    position: relative;
    top: 0;
    width: 100%;
    margin: auto;
    padding-top: 140px;
}
.hero-list .wrap-list{
    width: 1221px;
    margin: auto;
    overflow: hidden;
    position: relative;
    padding-left: 21px;
    padding-bottom: 250px;
}
.wrap-tit {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 4px;
    color: #c39b5e;
    text-align: center;
}
.wrap-tit h3::after, .wrap-tit h1::after {
    content: '';
    position: absolute;
    width: 1200px;
    height: 9px;
    background: url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
    background-position-y: -220px;
    top: 68px;
    left: 21px;
}
.wrap-content{
  margin-top:70px;
}
.adjust-list{
    width: 100%;
    overflow: hidden;
    ul{
      li{
      float: left;
      width: 384px;
      overflow: hidden;
      margin-right: 23px;
      height: 360px;
      border: solid 1px #252525;
      background: #000;
      box-sizing: border-box;
      cursor: pointer;
      margin-bottom: 24px;
      text-align: center;
      border-radius: 5px;
      }
      li:hover {
         border: solid 1px #bd8939;
      }
      .SkinItem{
        display: block;
        position: relative;
      }
      .adjust-label2{
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 5;
        pointer-events: none;
      }
      .adjust-img{
          width: 100%;
          height: 237px;
          overflow: hidden;
          img{
            width: 100%;
            -webkit-transition: all 0.4s ease;
           transition: all 0.4s ease;
          }
      }
      .adjust-cont{
        padding: 16px 12px 14px;
        box-sizing: border-box;
      }
      .adjust-desc{
        width: 90%;
        font-size: 13px;
        color: #767168;
        line-height: 1.2;
        text-align: center;
        margin: 0 auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .adjust-name {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 1px;
        color: #8f897f;
        margin-top: 12px;
      }
      li:hover .adjust-name{
            color: #bd8939;
      }
      .adjust-time{
        font-size: 13px;
        line-height: 24px;
        letter-spacing: 1px;
        color: #535353;
        margin-top: 4px;
      }
    }
}
  .adjust-list li:hover .adjust-img img {
    transform: scale(1.1);
}
</style>