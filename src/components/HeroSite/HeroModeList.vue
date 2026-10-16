<template>
  <div class="arts-listCont" v-show="route.name==='HeroSiteMode'">
    <div class="wrap-list">
      <div class="wrap-tit">
        <h3>玩法爆料</h3>
      </div>
      <div class="wrap-content">
        <div class="arts-list news-list">
          <ul>
            <li v-for="item in HeroModeList" :key="item.id">
              <div class="ListMode">
                <div class="arts-cont">
                  <p class="arts-name">{{ item.type }}</p>
                  <p class="arts-desc">{{ item.name }}</p>
                </div>
                <p class="arts-time">{{ item.time }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
   <div class="arts-listCont" v-show="route.name==='HeroSiteSystem'">
    <div class="wrap-list">
      <div class="wrap-tit">
        <h3>系统爆料</h3>
      </div>
      <div class="wrap-content">
        <div class="arts-list news-list">
          <ul>
            <li v-for="item in HeroSystem" :key="item.id">
              <div class="ListMode">
                <div class="arts-cont">
                  <p class="arts-name">{{ item.type }}</p>
                  <p class="arts-desc">{{ item.name }}</p>
                </div>
                <p class="arts-time">{{ item.time }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
   <div class="arts-listCont" v-show="route.name==='HeroSiteArts'">
    <div class="wrap-list">
      <div class="wrap-tit">
        <h3>美术优化爆料</h3>
      </div>
      <div class="wrap-content">
        <div class="arts-list news-list">
          <ul>
            <li v-for="item in HeroSkinArits" :key="item.id">
              <div class="ListMode">
                <div class="arts-cont">
                  <p class="arts-name">{{ item.type }}</p>
                  <p class="arts-desc">{{ item.name }}</p>
                </div>
                <p class="arts-time">{{ item.time }}</p>
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
import {useRoute} from 'vue-router'
import {HeroModeList,HeroSystem,HeroSkinArits} from '@/utils/HeroMode.js'

const route = useRoute()
</script>

<style lang="scss" scoped>
.arts-listCont {
  padding-top: 110px;
  position: relative;
  width: 1200px;
  margin: auto;

  .wrap-list {
    width: 1200px;
    margin: auto;
    overflow: hidden;
    position: relative;
  }

  .wrap-tit {
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 4px;
    color: #c39b5e;
    text-align: center;
  }

  h3::after {
    content: '';
    position: absolute;
    width: 1200px;
    height: 9px;
    background: url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
    background-position-y: -220px;
    top: 68px;
    left: 0;
  }

  .wrap-content {
    margin-top: 70px;
  }

  .arts-list {
    width: 100%;
    overflow: hidden;
  }

  .news-list {
    margin-bottom: 135px;

    ul {
      min-height: 480px;
      padding: 0;
      margin: 0;
      list-style: none;
    }

    li {
      box-sizing: border-box;
      height: 48px;
      border: none;
      border-bottom: 1px solid #252525;
      margin-bottom: 0;
      background: transparent;
      width: 1200px;
      overflow: hidden;
      text-align: center;
      cursor: pointer;

      .ListMode {
        height: 47px;
        line-height: 47px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .arts-cont {
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }

      .arts-name {
        margin: 0;
        font-size: 16px;
        color: #767168;
        line-height: 47px;
      }

      .arts-desc {
        margin: 0 0 0 30px;
        padding: 0;
        line-height: 47px;
        font-size: 16px;
        color: #8f897f;
        width: 920px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: left;
      }

      .arts-time {
        font-size: 16px;
        color: #535353;
        line-height: 47px;
        margin: 0;
      }

      &:hover {
        border-bottom-color: #bd8939;

        .arts-name,
        .arts-desc,
        .arts-time {
          color: #c39b5e;
        }
      }
    }
  }
}
</style>
