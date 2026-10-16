<template>
  <div class="pageBanner">
      <div class="banner">
        <img src="/image/HeroArts/m2.webp">
      </div>
  </div>
  <div class="arts-head">
    <div class="wrap-tit">
      <h1>
        青白蛇美术优化
      </h1>
    </div>
  </div>
  <HeroArtsContent></HeroArtsContent>
</template>

<script setup>
import HeroArtsContent from './HeroArtsContent.vue'
</script>

<style lang="scss" scoped>
.pageBanner{
  width:100%;
  text-align: center;
  .banner{
    max-height:890px;
    overflow: hidden;
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
.arts-head{
  position:relative;
  width:1200px;
  margin:auto;
  top:-100px;
  .wrap-tit{
    font-size:40px;
    line-height:60px;
    letter-spacing:4px;
    color:#c39b5e;
    text-align:center;
    h1{
      position:relative;
      font-size:60px;
      letter-spacing:0px;
      font-weight:bold;
    }
    h1::after{
      content:'';
      position:absolute;
      width:1200px;
      height:9px;
      background:url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
      background-position-y: -220px;
      left: 0;
      bottom: -20px;
      top:auto;
    }
  }
}
</style>