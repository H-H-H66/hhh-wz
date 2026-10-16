<template>
  <div class="arts-content">
     <div class="wrap-cont">
        <div class="arts-txt">
          战队系统是王者荣耀中非常重要的社交玩法，召唤师们在这里相聚，在这里一起参与比赛，一起迎接胜利，也一起笑对失败。在长期的过程中，我们收到了召唤师们对于战队系统的多方面吐槽，我们一直在关注这些问题并规划了长期的工作去对它进行改进。在以后的多个版本中，你们将持续看到我们在战队系统更新上的努力！敬请期待！
          <br>
          本次的战队赛更新是我们准备的第一个版本，在给大家介绍具体的更新内容之前想与大家聊一聊我们对于战队赛的设计想法。我们希望营造一个有电竞感受的线上全民赛事，荣誉、战区是我们核心的点。先讲荣誉，在之前的战队赛版本中，我们将战队划分在不同的小区内，导致了顶段的战队召唤师们没有更高的追求，这一次我们希望能够在游戏中建立不同梯度的战队赛事等级，希望给到战队更高的荣誉追求——全国冠军！
          <br>
          然后我们讲一下战区，我们将根据全国不同行政区域范围——全国，省，市，区对战队赛进行战区划分，战队的队长和副队长可根据自身战队的情况，选择对应的战区驻扎并开启战队赛，战队中的成员将跟随队长和副队长，在不同的战区一路挑战一路晋级！
          <br>
          战队可以选择一个代表自己的城市，赢得全国冠军，向全国的亿万王者召唤师们展示自己的战队以及自己战队的驻地！
          <br>
         下面为大家介绍本次战队系统的更新内容：
        </div>
     </div>
     <div class="wrap-cont">
      <div class="arts-txt">
        <center>
          <h2>(一)战区选择</h2>
        </center>
      </div>
     </div>
     <div class="wrap-cont" v-for="item in SysTem" :key="item.id">
        <div class="arts-txt">
          <center>
        {{item.title}}
          </center>
        </div>
        <div class="arts-img">
          <img :src="item.img">
        </div>
     </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const SysTem = ref([
  {id:1,title:'创建战队时，召唤师们可以在战队创建页面设置战队的驻扎战区：',img:'/image/HeroSystem/m3.webp'},
  {id:2,title:'已有战队，召唤师们可以在战队管理页面设置战队的驻扎战区：',img:'/image/HeroSystem/m4.webp'},
  {id:3,title:'之后在弹出的驻扎设置页面就可以进行修改：',img:'/image/HeroSystem/m5.webp'},
])
</script>

<style lang="scss" scoped>
.arts-content{
  position:relative;
  width:1200px;
  margin:-40px auto 0 auto;
  .wrap-cont{
    position:relative;
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
      h2::after{
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
        margin: 0 auto;
      }
    }
  }
}
</style>