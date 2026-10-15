<template>
  <div class="arts-listCont">
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
</template>

<script setup>
import { ref } from 'vue'
const HeroModeList = ref([
  { id: 1, type: '[限时活动玩法]', name: '玩法-1V1镜像战', time: '20200821' },
  { id: 2, type: '[限时玩法]', name: '王者模拟战（S1赛季）', time: '20200109' },
  { id: 3, type: '[限时活动玩法]', name: '新模式-变身大作战（正式服）', time: '20191026' },
  { id: 4, type: '[限时活动玩法]', name: '新模式-变身大作战', time: '20190923' },
  { id: 5, type: '[常驻玩法]', name: '新模式-梦境大乱斗', time: '20190627' },
  { id: 6, type: '[常驻玩法]', name: '新模式-日之塔', time: '20190117' },
  { id: 7, type: '[常驻玩法]', name: '突围复活模式', time: '20181122' },
  { id: 8, type: '[常驻玩法]', name: '突围模式', time: '20181101' },
  { id: 9, type: '[常驻玩法]', name: '契约之战', time: '20180319' },
  { id: 10, type: '[常驻玩法]', name: '五军对决', time: '20171222' },
])
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
