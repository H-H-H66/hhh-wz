<template>
  <div class="skin-skill">
    <ul class="accCount">
      <li class="accrdLi" 
       v-for="(skinItem,index) in skin.skills" 
       :key="skinItem.number"
       :class="{ active: activeIndex === index }"
       @mouseenter="activeIndex=index">
        <div class="raider_title">
            <div class="raider-tit">
              <span class="tit1">{{skinItem.number}}</span>
              <span class="tit2">{{skinItem.title}}</span>
            </div>
        </div>
        <div class="cont_box">
            <img :src="skinItem.media" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getSkinById } from '@/utils/HeroList.js'
import {useRoute} from 'vue-router'
const route = useRoute()
const activeIndex = ref(0)
const skin = getSkinById(route.params.id)
</script>

<style lang="scss" scoped>
.skin-skill{
  position:relative;
  width:1086px;
  margin:110px auto 0;
  .accCount{
    overflow: hidden;
    margin:0 auto;
    display:flex;
    flex-wrap:nowrap;
  }
  li.accrdLi{
    float: left;
    margin-bottom: 10px;
    position: relative;
    height: 360px;
    background: #1a1b1d;
    border-right: 3px solid #000;
  }
  .accrdLi {
  width: 112px;              // 收起：只露左边竖标题
  overflow: hidden;
  transition: width 0.4s ease;

  &.active {
    width: 750px;            // 展开：标题 + 图片都露出来
  }
}
  .raider_title:first-child{
   margin-left:0;
  }
  .raider_title{
    width:112px;
    font-size:30px;
    text-align: center;
    position: absolute;
    left:0;
    top:0;
    height:360px;
  }
  .raider-tit{
    border:solid 1px rgba(185,140,82,0.1);
    border-top:none;
    border-bottom:none;
    width:92px;
    height:330px;
    margin:15px 10px;
    cursor: pointer;
    .tit1{
      display:block;
      line-height: 30px;
      letter-spacing: 1px;
      color: #c39b5e;
      width: 35px;
      margin: auto;
      border-bottom: 1px solid rgba(195, 155, 94, 0.5);
      padding: 40px 0 10px 0;
    }
    .tit2 {
    width: 34px;
    display: inline-block;
    line-height: 30px;
    line-height: 36px;
    letter-spacing: 6px;
    color: #c39b5e;
    font-weight: 600;
    /* border-bottom: 5px solid #c39b5e; */
    padding: 24px 0;
}
  }
  .cont_box{
    width:638px;
    position:absolute;
    left:112px;
    height:360px;
    img{
      width:100%;
      height:100%;
    }
  }
}
</style>