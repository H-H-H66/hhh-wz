<template>
  <div class="hero-play-think">
      <div class="wrap-tit">
        <h3>玩法思路</h3>
      </div>
      <div class="wrap-content">
        <div class="play-text" v-for="(item,i) in (hero?.ApproStory || [])" :key="i">
          <p class="left-desc">
            <b>
              <font>{{item.title}}</font>
            </b>
          </p>
          <p v-for="(para, j) in item.content":key="j" >{{para}}</p>
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
.hero-play-think{
  position:relative;
  width:1200px;
  margin:88px auto 0;
  text-align: center;
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
    background:url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
    background-position-y:-220px;
    top:68px;
    left:0;
  }
  .wrap-content{
    padding-top:78px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    .play-text{
      width:600px;
      height:341px;
      text-align: left;
      display:flex;
      align-items: center;
      flex-wrap: wrap;
      overflow-y: auto;
    .left-desc{
      height: 100%;
      overflow-y: auto; 
      font-size: 16px;
      line-height: 36px;
      color: #8f897f;
      b{
        font-style: normal;
      }
      margin:0 0 1em 0;
  }
  font{
    color: rgb(218, 165, 32);
      margin-bottom:0;
    }
    }
  }
}
</style>
