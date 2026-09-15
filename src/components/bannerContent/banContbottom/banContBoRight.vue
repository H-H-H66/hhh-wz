<template>
  <div class="right-zone">
    <img src="/public/image/banner1/debalt.png" class="img-default">
    <div class="news-tab">
      <div
        v-for="tab in tabs"
        :key="tab.name"
        class="tab-item"
        :class="{ active: activeTab === tab.name }"
        :style="{ left: tab.tabLeft }"
        @mouseenter="activeTab = tab.name"
      >
        {{ tab.name }}
      </div>
      <div class="more-button">更多</div>
      <img src="/public/image/banner1/xiang.png" class="img-xiang">
      <img
        src="/public/image/banner1/daohang.png"
        class="img-daohang"
        :style="{ left: currentNavLeft }"
      >
    </div>
    <div
      :key="activeTab"
      class="animate__animated animate__fadeInRight news-panel"
      style="visibility: visible; --animate-duration: 0.3s;"
    >
      <div class="news-word-item-container">
        <div
          v-for="(item, i) in newsMap[activeTab]"
          :key="`${activeTab}-${i}`"
          class="news-word-item"
        >
          <div :class="['title', `title-${item.type}`]">{{ item.tag }}</div>
          <div class="word">{{ item.word }}</div>
          <div class="time">{{ item.time }}</div>
          <img src="/public/image/banner1/bottomxiang.png" class="bottomxiang">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const activeTab = ref('热门')

const tabs = [
  { name: '热门', tabLeft: '10px', navLeft: '4px' },
  { name: '公告', tabLeft: '100px', navLeft: '94px' },
  { name: '新闻', tabLeft: '190px', navLeft: '184px' },
  { name: '活动', tabLeft: '280px', navLeft: '274px' },
  { name: '赛事', tabLeft: '370px', navLeft: '364px' },
]

const currentNavLeft = computed(() => {
  return tabs.find((t) => t.name === activeTab.value)?.navLeft || '4px'
})

const newsMap = {
  热门: [
    { tag: '置顶',type:'top', word: '9月9日版本更新公告', time: '09/08', top: true },
    { tag: '热门',type:'hot', word: '对局任务奖励领取延迟问题说明公告', time: '09/10' },
    { tag: '热门',type:'hot', word: '9月11日问题修复版本更新公告', time: '09/09' },
    { tag: '热门',type:'hot', word: '9月5日问题修复版本更新公告', time: '09/04' },
  ],
  公告: [
    { tag: '置顶',type:"top", word: ' 9月15日抢先服S45赛季版本更新公告 ', time: '09/14', top: true },
    { tag: '置顶',type:"top", word: '9月9日版本更新公告', time: '09/08', top: true },
    { tag: '公告',type:"notice", word: '9月11日问题修复版本更新公告', time: '09/09' },
    { tag: '公告',type:"notice", word: '9月5日问题修复版本更新公告', time: '09/04' },
  ],
  新闻: [
    { tag: '新闻',type:"news", word: '新英雄上线预告', time: '09/12' },
    { tag: '新闻',type:"news", word: '版本前瞻：新皮肤抢先看', time: '09/11' },
    { tag: '新闻',type:"news", word: '9月11日问题修复版本更新公告', time: '09/09' },
    { tag: '新闻',type:"news", word: '9月5日问题修复版本更新公告', time: '09/04' }
  ],
  活动: [
    { tag: '活动',type:'event', word: '周末双倍经验开启', time: '09/13' },
    { tag: '活动',type:'event', word: '累计登录领限定奖励', time: '09/12' },
    { tag: '活动',type:'event', word: '9月11日问题修复版本更新公告', time: '09/09' },
    { tag: '活动',type:'event', word: '9月5日问题修复版本更新公告', time: '09/04' }
  ],
  赛事: [
    { tag: '赛事',type:"sports", word: 'KPL秋季赛赛程公布', time: '09/14' },
    { tag: '赛事',type:"sports", word: '挑战者杯报名开启', time: '09/13' },
    { tag: '赛事',type:"sports", word: '9月11日问题修复版本更新公告', time: '09/09' },
    { tag: '赛事',type:"sports", word: '9月5日问题修复版本更新公告', time: '09/04' }
  ],
}
</script>

<style scoped lang="scss">
.right-zone {
  position: absolute;
  left: 499px;
  top: 5px;

  .img-default {
    position: absolute;
    width: 610px;
    height: 216px;
    left: -55px;
    top: -5px;
  }

  .news-tab {
    position: absolute;
    left: -28px;
    font-size: 16px;
    text-align: center;
    user-select: none;

    .tab-item {
      position: absolute;
      color:#fff;
      width: 80px;
      top: 10px;
      cursor: pointer;
      transition: color 0.2s;

      &.active {
        color: rgb(184, 162, 108);
      }

      // &:hover {
      //   color: #fff;
      // }
    }

    .more-button {
      position: absolute;
      width: 48px;
      height: 20px;
      line-height: 18px;
      left: 492px;
      top: 12px;
      color: #d3d3d3;
      text-align: center;
      cursor: pointer;
      border: 1px solid #d3d3d3;
    }

    .img-xiang {
      position: absolute;
      width: 555px;
      height: 1px;
      left: 4px;
      top: 40px;
      overflow: clip;
    }
    .img-daohang {
      position: absolute;
      width: 91px;
      height: 20px;
      top: 32px;
      left: 4px;
      transition: left 0.25s ease;
    }
  }

  .news-panel {
    position: absolute;
    left: 0;
    top: 0;
  }

  .news-word-item-container {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 540px;
    height: 150px;
    left: -25px;
    top: 50px;
    overflow: hidden;
    padding-top: 10px;

    .news-word-item {
      position: relative;
      width: 520px;
      height: 40px;
      flex-shrink: 0;
    }

    // .top-title {
    //     position: absolute;
    //     width: 44px;
    //     height: 24px;
    //     top: -3px;
    //     text-align: center;
    //     font-size: 16px;
    //     font-weight: 700;
    //     color: rgb(246, 183, 56);
    //     border-width: 1px;
    //     border-style: solid;
    //     border-color: rgb(246, 183, 56);
    //     border-image: none;
    // }

    // .title {
    //   position: absolute;
    //   width: 44px;
    //   height: 24px;
    //   top: -3px;
    //   text-align: center;
    //   font-size: 16px;
    //   color: rgb(175, 120, 85);
    //   border: 1px solid rgb(175, 120, 85);
    // }
    .title-top{
        position: absolute;
        width: 44px;
        height: 24px;
        top: -3px;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: rgb(246, 183, 56);
        border-width: 1px;
        border-style: solid;
        border-color: rgb(246, 183, 56);
        border-image: none;
    }
    .title-hot{
       position: absolute;
       width: 44px;
      height: 24px;
      top: -3px;
      text-align: center;
      font-size: 16px;
      color: rgb(219, 112, 64);
      border: 1px solid rgb(219, 112, 64);
    }
    .title-notice{
       position: absolute;
       width: 44px;
       height: 24px;
       top: -3px;
       text-align: center;
       font-size: 16px;
       color: rgb(175, 120, 85);
       border: 1px solid rgb(175, 120, 85);
    }
    .title-news{
       position: absolute;
       width: 44px;
       height: 24px;
       top: -3px;
       text-align: center;
       font-size: 16px;
       color: rgb(237, 234, 186);
       border: 1px solid rgb(237, 234, 186); 
    }
    .title-event{
       position: absolute;
       width: 44px;
       height: 24px;
       top: -3px;
       text-align: center;
       font-size: 16px;
       color: rgb(104, 141, 83);
       border: 1px solid rgb(104, 141, 83);
    }
    .title-sports{
       position: absolute;
       width: 44px;
       height: 24px;
       top: -3px;
       text-align: center;
       font-size: 16px;
       color: rgb(108, 129, 170);
       border: 1px solid rgb(108, 129, 170);
    }
    .word {
      position: absolute;
      width: 420px;
      height: 18px;
      line-height: 18px;
      left: 60px;
      top: 0;
      font-size: 16px;
      color: #fff;
      opacity: 0.7;
      overflow: hidden;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      cursor: pointer;
    }
   .bottomxiang{
      position: absolute;
      width: 555px;
      top: 25px;
    }
    .time {
         position: absolute;
        width: 100px;
        height: 18px;
        line-height: 18px;
        color: #fff;
        opacity: .5;
        font-size: 16px;
        left: 440px;
        top: 0;
        text-align: right;
    }
  }
}
</style>
