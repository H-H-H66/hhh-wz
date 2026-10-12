<template>
  <div class="pagebox">
    <div class="wrap-content">
      <div class="wrap-tit">
        <h3>皮肤效果展示</h3>
      </div>
      <p class="tips">此为研发过程中录制，所展示内容仅供参考</p>
      <div class="page only-child">
        <div class="video-cont">
          <div class="video-img">
            <img :src="skin.images">
            <a class="player-box" title="点击播放">
              <i class="video-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import { getSkinById } from '@/utils/HeroList.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const skin = computed(()=>getSkinById(route.params.id))
</script>

<style lang="scss" scoped>
.pagebox{
position:relative;
margin-top:100px;
.wrap-content{
  width:1200px;
  margin:0 auto;
  overflow:hidden;
}
.wrap-tit{
  position:relative;
  font-size:40px;
  line-height:60px;
  letter-spacing: 4px;
  color:#c39b5e;
  text-align: center;
}
.wrap-tit h3::after{
  content:'';
  position:absolute;
  width:1200px;
  height:9px;
  background:url('/image/HeroSite/heroIcon-bg.webp') no-repeat;
  background-position-y:-220px;
  top:68px;
  left:0;
}
.tips{
  font-size:18px;
  color:#8f897f;
  text-align: center;
  margin:30px auto 20px;
}
.pagebox .page.only-child{
  justify-content: center;
}
  .video-cont{
    width:1086px;
    height:626px;
    box-sizing: border-box;
    border:1px solid rgba(195, 155, 94, .2);
    .video-img{
      width:1023px;
      height:576px;
      margin:25px auto;
      position:relative;
    }
    .video-img > img{
      width:100%;
      height:100%;
    }
    .player-box{
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
    }
    a{
      text-decoration: none;
    }
    .video-icon{
      position: absolute;
      top:50%;
      left:50%;
      width:90px;
      height:90px;
      margin-left:-45px;
      margin-top:-45px;
      border:solid 4px #fff;
      border-radius: 50%;
      z-index:8;
      cursor: pointer;
      opacity:0.8;
    }
    .video-icon::before{
      content:'';
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
    .video-icon::after{
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
  }
.pagebox .page{
  display: flex;
  align-items: center;
}
}
</style>