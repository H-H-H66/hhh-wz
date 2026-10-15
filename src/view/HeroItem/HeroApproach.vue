<template>
  <div class="hero-play-think">
    <div class="wrap-tit">
      <h3>玩法思路</h3>
    </div>
    <div class="wrap-content">
      <div class="play-text">
        <div class="play-block" v-for="(item, i) in (hero?.ApproStory || [])" :key="i">
          <p class="play-title">
            <b>
              <font>{{ item.title }}</font>
            </b>
          </p>
          <p v-for="(para, j) in item.content" :key="j">{{ para }}</p>
        </div>
      </div>
      <div class="play-media" v-if="hero?.ApproImage">
        <img :src="hero.ApproImage" alt="">
        <a class="player-box" title="点击播放">
          <i class="video-ico"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hero: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>
.hero-play-think {
  position: relative;
  width: 1200px;
  margin: 88px auto 0;
  text-align: center;

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
    padding-top: 78px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .play-text {
    width: 560px;
    max-height: 360px;
    text-align: left;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 16px;
    line-height: 36px;
    color: #8f897f;
    padding-right: 12px;

    .play-block {
      margin-bottom: 1.2em;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .play-title {
      margin: 0 0 0.4em;

      b {
        font-style: normal;
      }
    }

    p {
      margin: 0 0 1em;
    }

    p:last-child {
      margin-bottom: 0;
    }

    font {
      color: rgb(218, 165, 32);
    }
  }

  .play-media {
    position: relative;
    width: 560px;
    height: 315px;
    flex-shrink: 0;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .player-box {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 10;
      cursor: pointer;
      text-decoration: none;
    }

    .video-ico {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 90px;
      height: 90px;
      margin-left: -45px;
      margin-top: -45px;
      border: solid 4px #fff;
      border-radius: 50%;
      z-index: 8;
      opacity: 0.8;
    }

    .video-ico::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-width: 7px 10px;
      border-color: transparent transparent transparent #000;
      border-style: dashed dashed dashed solid;
      margin-top: -7px;
      margin-left: -2px;
      z-index: 1;
    }

    .video-ico::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-width: 15px 20px;
      border-color: transparent transparent transparent #fff;
      border-style: dashed dashed dashed solid;
      margin-top: -15px;
      margin-left: -6px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      pointer-events: none;
    }
  }
}
.hero-play-think{
   scroll-margin-top: 70px; 
}
</style>
