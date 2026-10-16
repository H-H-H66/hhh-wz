<template>
  <bannerTop></bannerTop>
  <div class="header-container-2023" style="width:100%">
     <img class="banner-image-2023" src="/image/WallPaper/bannerImage.webp" style="width:100%;height:310px"></img>
     <img class="detail-button-2023" 
     src="/image/WallPaper/detailButton.png" 
     style="width:196.667px;height:50px;left:125px;top:210.333px"
     ></img>
  </div>
  <wallConcent></wallConcent>
</template>

<script setup>
import bannerTop from '@/components/bannerTop/bannerTop.vue'
import wallConcent from "./wallpaperContent.vue"
</script>

<style lang="scss" scoped>
.header-container-2023{
  background-color: #191919;
  position:relative;
  min-width:80px;
  min-height:80px;
  box-sizing: border-box;
  transform-origin: 0% 0%;
  z-index: 10;
  .banner-image-2023{
    display: block;
    border-radius: 2px 2px 2px 2px;
  }
  .detail-button-2023{
    position: absolute;
    cursor: pointer;
  }
}
</style>