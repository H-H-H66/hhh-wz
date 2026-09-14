<template>
  <div class="bannerContent">
    <img src="/image/banner1/shiling.webp" alt="适龄提示" class="img1" />
    <img src="/image/banner1/fanchenmi.png" alt="防沉迷" class="img2" />
    <div class="View_Guide">
      <img src="/image/banner1/downloadButtonBG.webp" alt="下载按钮" class="img3" />
      <div class="text">查看攻略</div>
    </div>
    <banContbottom />
  </div>
</template>

<script setup>
import banContbottom from './banContbottom/banContbottom.vue'
</script>

<style scoped lang="scss">
.bannerContent {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;

  .img1,
  .img2 {
    position: absolute;
    cursor: pointer;
    pointer-events: auto;
    transform-origin: 0% 0%;
    z-index: 100;
  }

  .img1 {
    right: 185px;
    top: 100px;
    width: 38px;
    height: 50px;
  }

  .img2 {
    right: 185px;
    top: 160px;
    width: 38px;
    height: auto;
  }

  .View_Guide {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 210px;
    height:45px;
    cursor: pointer;
    pointer-events: auto;
    user-select: none;
    z-index: 100;

    .img3 {
      display: block;
      width: 100%;
      height: 100%;
    }

    .text {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: bold;
      color:#463111;
      letter-spacing: 2px;
    }
  }
}
</style>
