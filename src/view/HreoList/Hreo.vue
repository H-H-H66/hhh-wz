<template>
  <div class="Hreo">
    <div class="page-scroll">
     <banner-top />
     <bannerList></bannerList>
      <div class="content-Top">
        <div class="content-bottom">
          <div class="zk-con1">
          <breadcrumb></breadcrumb>
          <h1 class="herolist-title">{{route.meta.title}}</h1>
          <ul class="herolist-nav">
              <li :class="{'current':currentSelected===heros.id}" v-for="heros in heroList" :key="heros.id" @click="select(heros)">
                <span>{{heros.text}}</span>
              </li>
          </ul>
          </div>
          <div class="herolist-box">
          <router-view></router-view>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
import bannerTop from '@/components/bannerTop/bannerTop.vue'
import bannerList from "@/components/bannerList/bannerList.vue"
import breadcrumb from "@/components/breadcrumb/breadcrumb.vue"
import { useRoute,useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
const currentSelected =computed(()=>{
  const match = heroList.value.find((h)=>h.path===route.path)
  return match?.id || 1
})
const select = (heros) => {
  router.push(heros.path)
}
const heroList = ref(
  [
    {
      id:1,
      text:'英雄',
      path:'/hero/hero'
    },
    {
      id:2,
      text:'局内道具',
      path:'/hero/heroItem'
    },
    {
      id:3,
      text:'召唤师技能',
      path:'/hero/heroSpell'
    }
  ]
)
</script>


<style scoped lang="scss">
.Hreo{
   height: 100vh;
   overflow: hidden;
   background: #f2efe6;
}
.page-scroll {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.content-Top {
  margin-top: -5px;
  background-color: #f2efe6;
}

.content-bottom {
  width: 1200px;
  min-height: calc(100vh - 300px);
  margin: 0 auto;
  padding-bottom: 55px;
  box-sizing: border-box;
}
.zk-con1{
  padding-top: 40px;
  overflow: hidden;
}
.herolist-title{
    margin-top: 25px;
    padding-left: 25px;
    font: bold 20px / 22px '\5FAE\8F6F\96C5\9ED1';
    background: url('/public/image/hero/icon_hero.webp') no-repeat;
}
ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
}
.herolist-nav{
    margin-top: 20px;
    height: 32px;
    font-size: 16px;
    border-bottom: 3px solid #D4D4D4;
    border-radius: 0 0 3px 3px;
}
.herolist-nav li{
    float: left;
    width: 33%;
    margin-bottom: -3px;
    position: relative;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    text-align: center;

}
.herolist-nav li.current {
    border-bottom: 3px solid #3589DD;
    border-radius: 0 0 3px 3px;
}
.herolist-nav .current span{
  color:#3589DD;
  font-weight: bold;
  width: 100%;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
}
.herolist-nav span{
    display: block;
    width: 100%;
    line-height: 32px;
    text-align: center;
    color: #4B4B4B;
    cursor: pointer;
}
.herolist-box{
  padding-top:25px;
  padding:35px 28px;
  border:2px solid #E8E8E8;
  border-top:0;
  position: relative;
}
</style>