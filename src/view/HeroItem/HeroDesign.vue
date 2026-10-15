<template>
  <div class="hero-arts">
      <div class="wrap-tit">
          <h3>
            设计思路
          </h3>
      </div>
      <div class="wrap-content">
         <div class="design-cont-txt">
            <p v-for="(desiStory,index) in hero.DesignStory" :key="index">{{desiStory}}</p>
        </div>
         <div class="design-cont">
          <img :src="hero.DesignImage">
         </div>
      </div>
  </div>
</template>

<script setup>
defineProps({
  hero:{
    type:Object,
    default:function(){
      return {}
    }
  }
})
</script>

<style lang="scss" scoped>
.hero-arts{
  position:relative;
  width:1200px;
  margin:88px auto 0;
  .wrap-tit{
    font-size:40px;
    line-height:60px;
    letter-spacing: 4px;
    color:#c39b5e;
    text-align: center;
  }
  h3::after{
    content:'';
    position:absolute;
    width:1200px;
    height:9px;
      background: url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
      background-position-y:-220px;
      top:68px;
      left:0;
  }
  .wrap-content{
    width:100%;
    overflow: hidden;
  }
  .design-cont-txt{
    font-size:16px;
    line-height:36px;
    letter-spacing: 1px;
    color:#8f897f;
    margin-top:70px;
  }
  .design-cont{
    overflow: hidden;
    margin-top:49px;
    img{
      display: block;
      margin: 0 auto;
    }
  }
}
.hero-arts{
   scroll-margin-top: 70px; 
}
</style>