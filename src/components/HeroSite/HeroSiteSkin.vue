<template>
  <div class="pvp-newSkin">
     <div class="grid-header">
       <h3>皮肤</h3>
     </div>
     <div class="pvp-cont">
        <div class="cont-top">
          <div class="cont-top-left">
            <div class="cont-top-bor">
              <div class="top-tit">
                孙尚香
                <br></br>
                <span class="top-tit-name">云端乐园</span>
              </div>
              <div class="top-tab">
                <span>云端造梦，笑容改变世界!</span>
              </div>
              <div class="top-time">
                上线时间：2026-09-23
              </div>
              <div class="top-gif">
                <img src="/image/HeroSite/ssxdt.gif">
              </div>
              <div class="top-bot">
                <div>
                  <div class="showHero showHeroClo">
                    <span>查看皮肤</span>
                    <i class="more-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cont-top-right">
            <div>
              <img src="/image/HeroSite/ssx.jpg">
            </div>
          </div>
        </div>
        <div class="cont-bottom">
          <div class="cont-bottom-list">
            <ul>
              <li class="hero-list" v-for="heroItem in heroNameObj" :key="heroItem.id">
                <div>
                  <img :src="heroItem.img">
                  <p class="hero-name">{{heroItem.name}}</p>
                  <p class="show-mask">
                    <span class="hero-n">{{heroItem.desc}}</span>
                    <span class="hero-skill">{{heroItem.skill}}</span>
                    <span class="hero-time">上线时间：{{heroItem.time}}</span>
                  </p>
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
const heroNameObj = ref([
  {id:1,name:'帕恰狗之风-孙膑',desc:"帕恰狗之风-孙膑",skill:"随心逐浪，扬帆起航!",time:"20260924",img:'/image/HeroSite/sb.jpg'},
  {id:2,name:'旅行日记-亚瑟',desc:"旅行日记-亚瑟",skill:"心有所向，路有所往",time:"20260923",img:'/image/HeroSite/ys.jpg'},
  {id:3,name:'旅行日记-安琪拉',desc:'旅行日记-安琪拉',skill:'心有所向，路有所往',time:'20260923',img:'/image/HeroSite/aql.jpg'},
  {id:4,name:'月影弦鸣-伽罗',desc:'月影弦鸣-伽罗',skill:'月华所指，胜利将至',time:'20260929',img:'/image/HeroSite/jl.jpg'},
])
</script>

<style lang="scss" scoped>
.pvp-newSkin{
  position: relative;
}
.grid-header h3{
    color: #b98c52;
    text-align: center;
    font-size: 30px;
    margin: 100px 0 80px 0;
}
.pvp-newSkin h3:before {
    content: '';
    position: absolute;
    background: url(/image/HeroSite/icon-bg.webp) no-repeat;
    width: 36px;
    height: 49px;
    top: -55px;
    background-position-x: -255px;
    left: 50%;
    margin-left: -18px;
}
.grid-header h3:after {
    content: '';
    position: absolute;
    background: url(/image/HeroSite/icon-bg.webp) no-repeat;
    width: 175px;
    height: 10px;
    top:50px;
    background-position-y: -109px;
    left: 50%;
    margin-left: -87.5px;
}
.pvp-cont{
    width: 1200px;
    margin: auto;
    overflow: hidden;
}
.pvp-cont .cont-top{
    width: 1400px;
    height: 700px;
    margin: auto;
    overflow: hidden;
    position: relative;
}
.cont-top-left{
    position: absolute;
    top: 0;
    left: 0;
    color: #fff;
    width: 490px;
    height: 700px;
    background-color: rgba(12, 14, 18, 0.9);
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.26);
    opacity: 0.9;
}
.cont-top-bor{
    position: relative;
    border-left: 1px solid rgba(185, 140, 82, .1);
    height: 665px;
    margin: 11.5px 20px;
    padding-left: 20px;
    border-right: 1px solid rgba(185, 140, 82, .1);
}
.top-tit{
    font-size: 52px;
    color: #c39b5e;
    line-height: 52px;
    margin-top: 35px;
    font-weight: 600;
}
.top-tit-name{
    color: #b98c52;
    display: inline-block;
    margin-top: 4px;
}
.top-tab{
  margin: 21px 0 17px 0;
  span{
    background-color: #0c0f13;
    border-radius: 12px;
    border: solid 1px #c39b5e;
    font-size: 14px;
    color: #b98c52;
    padding: 4px 7.5px;
    margin-right: 10px;
    word-break: keep-all;
  }
}
.top-time{
 margin: 30px 0 15px 38px;
}
.top-time:after{
    content: '';
    width: 27px;
    height: 25px;
    background: url(/image/HeroSite/icon-bg.webp) no-repeat;
    position: absolute;
    top: -1px;
    background-position-x: -151px;
    left: -27px;
    margin-left: -12.5px;
    background-position-y: -17px;
}
.top-gif{
    border: solid 1px #5f4f39;
    width: 400px;
    height: 225px;
    img{
      width:100%;
    }
}
.top-bot{
    position: absolute;
    bottom: 35px;
    width: 400px;
    .showHeroClo{ 
      width: 400px;
      margin-left: 0;
    }
    .showHero{
      float: right;
      width: 100%;
      height: 56px;
      background-color: rgba(0, 0, 0);
      border: solid 1px #c39b5e;
      font-size: 18px;
      line-height: 56px;
      letter-spacing: 1px;
      color: #c39b5e;
      text-align: center;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
}
.more-icon{
    border-top: 2px solid #c39b5e;
    border-right: 2px solid #c39b5e;
    transform: rotate(45deg);
    display: inline-block;
    width: 13px;
    height: 13px;
}
.cont-top-right{
    position: absolute;
    top: 0;
    right: 0;
    width: 910px;   /* 1400 - 490，只占右侧 */
    height: 700px;
    overflow: hidden;
    img{
        width: 1400px;
        height: 700px;
        cursor: pointer;
        position: absolute;
        right: 0;    /* 图片锚定右侧，角色立绘（通常在图右半）完整可见 */
        top: 0;
    }
}
.cont-bottom{
    width: 1400px;
    margin: 45px auto;
    overflow: hidden;
}
.cont-bottom-list .hero-list{
    width: 290px;
    height: 174px;
    background-color: rgba(0, 0, 0, 0.9);
    opacity: 0.9;
    overflow: hidden;
    float: left;
    margin-right: 13px;
    position: relative;
    img{
      width: 100%;
    }
    .hero-name{
    position: absolute;
    bottom: 10px;
    width: 100%;
    font-size: 14px;
    text-align: center;
    color: #fff;
    z-index: 2;
    top:150px;
    opacity: 1;
    }
    .show-mask{
    position: absolute;
    width: 100%;
    text-align: center;
    opacity: 0;
    color: #fff;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-transition: 0.4s ease;
    transition: 0.4s ease;
    .hero-n{
      display: block;
      font-size: 15px;
      letter-spacing: 2px;
      color: #c3aa68;
      margin-top: 48px;
    }
    .hero-skill{
        display: block;
        font-size: 14px;
        letter-spacing: 1px;
        color: #bbb5ac;
    }
    .hero-time{
      display: block;
      font-size: 14px;
      color: #bbb5ac;
    }
    }
}
.cont-bottom-list li.hero-list:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 50%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, .8));
    left: 0;
    bottom: 0;
}
.hero-list:hover 
{
  .show-mask{
    opacity: 1;
    transition: opacity .3s;
}
.hero-name{
    opacity: 0;
   }
}
li.hero-list:hover img {
    transform: scale(1.1);
    -webkit-transition: 0.4s ease;
    transition: 0.4s ease;
}
li.hero-list:hover {
    border: solid 1px #c39b5e;
    box-sizing: border-box;
    transition: opacity .3s;
}
</style>