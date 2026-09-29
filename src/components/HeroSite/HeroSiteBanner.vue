<template>
  <div class="HeroBanner">
  <el-carousel :interval="4000"  type="card" height="600px">
    <el-carousel-item v-for="item in HeroSiteItem" :key="item.id">
        <div class="bannerHero">
          <img :src="item.img" :alt="item.name">
          <!-- 底部黑色渐变遮罩 -->
          <div class="banner-mask"></div>
          <!-- 文案区 -->
          <div class="banner-title">
             <p class="banner-tit1">
                <span class="color">{{ item.desc }}</span>{{ item.name }}
             </p>
             <p class="banner-tit2">{{ item.time }}</p>
             <p class="banner-tit3">{{ item.title }}</p>
          </div>
        </div>
    </el-carousel-item>
  </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const HeroSiteItem = ref([
  {
    id:1,
    name:'月影弦鸣-伽罗',
    img:'/image/HeroSite/jl.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260929',
    title:'月华所指，胜利将至'
  },
  {
    id:2,
    name:'帕恰狗之风-孙膑',
    img:'/image/HeroSite/sb.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260924',
    title:'随心逐浪，扬帆起航！'
  },
  {
    id:3,
    name:'云端乐园-孙尚香',
    img:'/image/HeroSite/ssx.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260923',
    title:'云端造梦，笑容改变世界!'
  },
  {
    id:4,
    name:'旅行日记-亚瑟',
    img:'/image/HeroSite/ys.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260923',
    title:'心有所向，路有所往！'
  },
  {
    id:5,
    name:'旅行日记-安琪拉',
    img:'/image/HeroSite/aql.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260923',
    title:'心有所向，路有所往'
  },
  {
    id:6,
    name:'空山遗客-王维',
    img:'/image/HeroSite/ww.jpg',
    desc:'新英雄：',
    time:'上线时间：20260923',
    title:'雾锁径山千重意，一字未落已惊鸿。'
  },
  {
    id:7,
    name:'督灵司正-刘备',
    img:'/image/HeroSite/lb.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260910',
    title:'督灵司长官一人一枪行走世间，用困灵法阵抑制灵气暴动，履行着守护世间的责任。'
  },
  {
    id:8,
    name:'铁影缉凶-狂铁',
    img:'/image/HeroSite/kd.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260910',
    title:'铁影掠过暗巷，罪恶无处躲藏'
  },
  {
    id:9,
    name:'碎光执事-公孙离',
    img:'/image/HeroSite/gsl.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260909',
    title:'水晶为鉴，誓言不渝'
  },
  {
    id:10,
    name:'傩神司-鲁班大师',
    img:'/image/HeroSite/lb.jpg',
    desc:'新皮肤：',  
    time:'上线时间：20260901',
    title:'鲁班大师全新史诗皮肤上线'
  },
  {
    id:11,
    name:'小李飞刀-狄仁杰',
    img:'/image/HeroSite/drj.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260819',
    title:'古龙小说正版授权'
  },
  {
    id:12,
    name:'临界推演-苏烈',
    img:'/image/HeroSite/sl.jpg',
    desc:'新皮肤：',
    time:'上线时间：20260813',
    title:'苏烈全新勇者皮肤上线'
  }
])
</script>

<style scoped lang="scss">
.HeroBanner{
  width: 100%;
  margin: 55px 0;

  /* 每张轮播铺满，不留卡片缝隙 */
  .bannerHero{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .bannerHero img{
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  /* 底部黑色渐变遮罩，让文案清晰 */
  .banner-mask{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 45%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.82), rgba(0, 0, 0, 0));
    pointer-events: none;
  }

  /* 文案区：整体居中，位于指示器上方 */
  .banner-title{
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, .85);
    bottom: 0;
    color: #fff;
    text-align: center;
    height: 172px;
    p{
      margin: 0;
    }
  }
  .banner-tit1{
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    line-height: 1.3;
    .color{
      color: #c39b5e; /* 金色前缀，如“新皮肤：” */
    }
  }
  .banner-tit2{
    margin-top: 12px !important;
    font-size: 18px;
    color: #eaeaea;
  }
  .banner-tit3{
    margin-top: 20px !important;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.55);
  }

  /* 指示器：圆点改小横杠，当前项金色 */
  :deep(.el-carousel__indicators--horizontal){
    bottom: 30px;
  }
  :deep(.el-carousel__indicator--horizontal){
    padding: 0 10px;
  }
  :deep(.el-carousel__button){
    width: 30px;
    height: 3px;
    border-radius: 0;
    opacity: 1;
    background: rgba(255, 255, 255, 0.45);
    transition: background 0.2s ease;
  }
  :deep(.el-carousel__indicator--horizontal.is-active .el-carousel__button){
    background: #c39b5e;
  }
  :deep(.el-carousel__indicators){
    margin-bottom:-20px;
  }
}
</style>