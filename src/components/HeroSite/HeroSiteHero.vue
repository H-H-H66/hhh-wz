<template>
  <div class="pvp-newSkin">
     <div class="grid-header">
       <h3>英雄</h3>
     </div>
     <div class="pvp-cont">
        <div class="cont-top">
          <div class="cont-top-left">
            <div class="cont-top-bor">
              <div class="top-tit">
                王维
                <br></br>
                <span class="top-tit-name">空山遗客</span>
              </div>
              <div class="top-tab"></div>
              <div class="top-types">
                <i class="hero-sort-2"></i>
              </div>
              <div class="top-time">
                上线时间：2026-09-23
              </div>
              <div class="top-gif">
                <img src="/image/HeroSite/ww.jpg">
              </div>
              <div class="top-bot">
                <div>
                  <div class="showHero showHeroClo">
                    <span>查看英雄</span>
                    <i class="more-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cont-top-right">
            <div>
              <img src="/image/HeroSite/ww.jpg">
            </div>
          </div>
        </div>
     </div>
  </div>
</template>

<script setup>

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
    background-position-x: -100px;
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
       span{
        position: absolute;
        left: 0;
        width: 100%;
       }
    }
    .more-icon{
    border-top: 2px solid #c39b5e;
    border-right: 2px solid #c39b5e;
    transform: rotate(45deg);
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-left: 100px;
}
  .showHero:hover span{
    -webkit-animation: .1s slideUp linear normal, .1s .1s slideDown linear normal;
    animation: .1s slideUp linear normal, .1s .1s slideDown linear normal;
}
@keyframes slideUp{
0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
100% {
    -webkit-transform: translateY(-70%);
    transform: translateY(-70%);
}
}
@keyframes slideDown{
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
.cont-top-left .top-types {
    position: relative;
    width: 100%;
    min-height: 65px;
}
i.hero-sort-2 {
    background-position: 0 -71px;
}
.top-types i {
    display: inline-block;
    width: 150px;
    height: 65px;
    overflow: hidden;
    text-indent: -9999em;
    background: url(/image/HeroSite/hero-sort.webp) no-repeat;
    background-position: 0 -71px;
}
</style>