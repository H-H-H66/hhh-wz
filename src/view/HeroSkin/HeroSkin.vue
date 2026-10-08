<template>
  <div class="HeroSkin">
    <div class="arts-head-conts">
      <img src="/image/HeroSite/ss.webp" alt="史诗" class="arts-head-label">
      <div class="arts-head-title">星光竞辉-海诺</div>
      <div class="arts-head-time">
        <i class="icon-lineL"></i>
        20261001
        <i class="icon-lineR"></i>
      </div>
      <div class="arts-head-desc">纷争止于赛场，荣耀生于此刻</div>
      <div class="arts-head-btn">
        <div class="GotoDetail">
          <div class="showHero">
            <span>
              查看详情
              <i class="more-icon"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HeroNewSkin></HeroNewSkin>
</template>

<script setup>
import HeroNewSkin from '@/view/HeroSkin/HeroNewSkin.vue'
</script>

<style lang="scss" scoped>
.HeroSkin{
    background:url('/image/HeroSite/hr.jpg');
    width: 100%;
    max-height: 750px;
    height: 750px;
    overflow: hidden;
    background-color: #000;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center 80px;
    position: relative;
}
.arts-head-conts{
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    margin: auto;
    z-index: 2;
}
.HeroSkin:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 1));
}
.arts-head-label{
  display: block;
  margin: 0 auto 14px;
}
.arts-head-title{
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 6px;
  color: #c39b5e;
  font-weight: 600;
}
.arts-head-time{
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 1px;
    color: #8f897f;
    margin: 18px 0 17px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-lineL{
      background:url('/image/HeroSite/icon-lineL.png') no-repeat center / 100%;
    }
    .icon-lineR{
      background:url('/image/HeroSite/icon-lineR.png') no-repeat center / 100%;
    }
}
.arts-head-time i {
    width: 104px;
    height: 9px;
}
.arts-head-desc {
    font-size: 16px;
    line-height: 16px;
    color: #8f897f;
    margin: 0 0 30px 0;
}
.GotoDetail{
  .showHero{
    width: 314px;
    height: 60px;
    background-color: rgba(0, 0, 0);
    border: solid 1px #c39b5e;
    font-size: 18px;
    line-height: 60px;
    letter-spacing: 1px;
    color: #c39b5e;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin: auto;
     span {
    position: absolute;
    left: 0;
    width: 100%;
}
.more-icon{
    border-top: 2px solid #c39b5e;
    border-right: 2px solid #c39b5e;
    transform: rotate(45deg);
    display: inline-block;
    width: 13px;
    height: 13px;
}
  }
  .showHero:hover span {
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
</style>