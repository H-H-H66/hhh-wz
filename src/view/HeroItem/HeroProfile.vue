<template>
  <div class="hero-intro ">
      <div class="hero-intro-left">
          <div class="hero-info">
            <div class="intro-title">
              英雄概括
            </div>
            <div class="info-skill">
                <i
                  v-for="job in (hero?.jobs || [])"
                  :key="job"
                  class="hero-sort"
                  :class="`hero-sort-${job}`"
                ></i>
            </div>
            <div class="info-tab"></div>
            <div class="info-time">
              上线时间: {{time(hero?.time || '')}}
            </div>
            <div class="info-gif">
              <img :src="hero?.proImage">
              <a class="player-box">
                <i class="video-ico"></i>
              </a>
            </div>
          </div>
      </div>
      <div class="hero-story">
         <div class="intro-title">
          英雄故事
         </div>
         <div class="story-txt">
          <p v-for="(para, i) in (hero?.story || [])" :key="i">{{ para }}</p>
         </div>
         <div class="info-btn">
            <div class="info-btn-list">
              <span>
                进入英雄故事站
                <i class="more-icon"></i>
              </span>
            </div>
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
const time = (str) =>{
  if (!str) return '';
  return str.replace(/^(\d{4})(\d{2})(\d{2})$/, '$1.$2.$3');
}
</script>

<style lang="scss" scoped>
.hero-intro{
  position:relative;
  overflow: hidden;
  width:1200px;
  margin:88px auto 0;
  .hero-intro-left{
    padding:11.5px 20px;
    float:left;
    width:450px;
    height:598px;
    background-color:rgba(26,27,29,0.3);
    box-shadow:0px 0px 4px 0px rgba(0, 0, 0, 0.29);
  }
  .hero-info{
    border-left:1px solid rgba(185, 140, 82, 0.1);
    border-right:1px solid rgba(185, 140, 82, 0.1);
    height:598px;
    padding-left:25px;
  }
  .intro-title{
    font-size:26px;
    color:#c39b5e;
    width:398px;
    height:65px;
    border-bottom:1px solid #c39b5e;
  }
  .info-skill{
    position:relative;
    width:100%;
    min-height:65px;
    margin:40px 0 20px;
    
    .hero-sort-marksman { background-position: 0 -351px; } // 射手
    .hero-sort-assassin { background-position: 0 -280px; } // 刺客
    .hero-sort-mage     { background-position: 0 -71px; } // 法师
    .hero-sort-support  { background-position: 0 -211px; } // 辅助
    .hero-sort-warrior  { background-position: 0 -141px; } // 战士
    .hero-sort-tank     { background-position: 0 0px; } // 坦克
     i{
      display:inline-block;
      width:150px;
      height:65px;
      overflow:hidden;
      text-indent:-9999em;
      background:url('/image/HeroItems/hero-sort.png') no-repeat
    }
  }
  .info-tab{
    margin-bottom:40px;
  }
  .info-time{
    font-size:20px;
    position:relative;
    margin:25px 0 18px 38px;
    color:#fff;
  }
  .info-time::after{
    content:'';
    width:27px;
    height:25px;
    background:url('/image/HeroSite/icon-bg.webp') no-repeat;
    position:absolute;
    top:2px;
    background-position-x: -151px;
    left:-27px;
    margin-left:-12.5px;
    background-position-y:-17px
  }
  .info-gif{
    position:relative;
    width:400px;
    height:225px;
    margin-bottom:20px;
    img{
      width:100%;
    }
    .player-box{
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index:10;
      cursor: pointer;
    }
    .video-ico{
      position:absolute;
      top:50%;
      left:50%;
      width:90px;
      height:90px;
      margin-left:-45px;
      margin-top:-45px;
      border:solid 4px #fff;
      border-radius:50%;
      z-index:8;
      cursor: pointer;
      opacity:0.8;
    }
    .video-ico::before{
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
    .video-ico::after{
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
  .info-gif::after{
    content:'';
    position:absolute;
    width:400px;
    height:225px;
    background:rgba(0,0,0,.2);
    top:0;
    left:0;
  }
  .hero-story{
    float:left;
    width:610px;
    height:562px;
    background-color:rgba(26,27,29,0.3);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.29);
    margin-left:20px;
    padding:11.5px 40px 48.5px 40px;
    .intro-title{
      width:610px;
    }
    .story-txt{
      width:581px;
      height:312px;
      font-size:16px;
      line-height:36px;
      color:#8f897f;
      overflow-y:auto;
      padding:30px 27px 0 0;
      margin:5px 0 50px 0;
      p{
        margin:0 0 1em;
        text-align: justify;
      }
      p:last-child{
        margin-bottom:0;
      }
    }
    .info-btn{
      width:610px;
      height:60px;
      background-color:rgba(0,0,0,0.5);
      border:solid 1px #c39b5e;
      font-size:18px;
      line-height:60px;
      letter-spacing:1px;
      color:#c39b5e;
      text-align:center;
      margin-bottom:20px;
      cursor: pointer;
      position:relative;
      overflow:hidden;
      .info-btn-list{
        color:#c39b5e;
      }
      span{
        position:absolute;
        left:0;
        width:100%;
      }
      .more-icon{
        border-top:2px solid #c39b5e;
        border-right:2px solid #c39b5e;
        transform:rotate(45deg);
        display:inline-block;
        width:13px;
        height:13px;
      }
    }
    .info-btn:hover span {
    -webkit-animation: .1s slideUp linear normal, .1s .1s slideDown linear normal;
    animation: .1s slideUp linear normal, .1s .1s slideDown linear normal;
    }
@keyframes slideUp{
    0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
     }
    } 
    @keyframes slideDown{
100% {
    -webkit-transform: translateY(-70%);
    transform: translateY(-70%);
}
0% {
    -webkit-transform: translateY(70%);
    transform: translateY(70%);
}
100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
    }
  }
}
</style>