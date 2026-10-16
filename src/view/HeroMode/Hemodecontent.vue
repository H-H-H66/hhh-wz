<template>
  <div class="arts-content">
      <div class="wrap-cont">
        <div class="arts-txt">
          峡谷受原初之息影响陷入劫难，英雄们团结集合奋力守卫峡谷！全新PVE限时活动玩法“守卫峡谷”即将上线，
          <b>集结，守卫峡谷！迎接，2021破晓！</b>
        </div>
      </div>
      <div class="wrap-cont">
        <div class="arts-txt">
          <center>
            <h2>背景故事：峡谷劫难，集结守卫</h2>
          </center>
        </div>
      </div>
      <div class="wrap-cont">
        <div class="arts-txt">
          原初之息，自逐渐扩张的裂隙涌出，源源不断浸染着峡谷。
          <br>
          野兽们贪婪地吮吸着力量，陷入狂暴并开始破坏这片土地。
          <br>
          王者峡谷，正在经历前所未有的劫难……
          <br>
          在鬼谷子的号召下，花木兰、上官婉儿、程咬金等英雄们聚集在这里，
          <br>
          司空震也从长安抵达峡谷，帮助复原破晓之心，
          <br>
          <b>英雄们团结集合</b>
          ，奋力抗住一波又一波的进攻。
          <br>
          但怪物仍如潮水般涌来……
          <br>
          <b>集结，守卫峡谷！</b>
          <br>
          <b>破晓，终将降临！</b>
        </div>
        <div class="arts-img">
          <img src="/image/HeroMode/m2.webp">
        </div>
      </div>
      <div class="wrap-cont">
        <div class="arts-txt">
         <center>
           <h2>玩法介绍：全新PVE玩法</h2>
         </center>
        </div>
      </div>
      <div class="wrap-cont">
        <div class="arts-txt">
          <b>守卫峡谷</b>
          是一个全新的PVE限时活动玩法，在这个玩法中，玩家将与队友一起选择参战英雄携手守卫峡谷，抵御源源不断的怪物入侵。
          <br>
          <br>
          <b>1、玩法入口</b>
          <br>
          大家可通过大厅活动玩法入口进入“守卫峡谷”
        </div>
        <div class="arts-img">
          <img src="/image/HeroMode/m3.webp">
        </div>
      </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.arts-content{
  position: relative;
  width:1200px;
  margin:60px auto 0 auto;
}
.wrap-cont{
  position:relative;
}
.arts-txt{
  font-size:16px;
  line-height:36px;
  color:#8f897f;
  h2{
    position:relative;
    font-size:40px;
    line-height:60px;
    letter-spacing:4px;
    color:#c39b5e;
    text-align:center;
    margin-top:80px;
    margin-bottom:60px;
  }
  h2:after{
    content:'';
    position:absolute;
    background:url('/image/HeroSite/icon-bg.webp') no-repeat;
    width:175px;
    height:10px;
    top:65px;
    background-position-y:-109px;
    left:50%;
    margin-left:-87.5px;
  }
}
.arts-img{
    max-width: 1200px;
    margin: 36px auto;
    overflow: hidden;
    img{
      display: block;
      margin:0 auto;
    }
}
</style>