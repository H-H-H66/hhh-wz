<template>
  <div class="HeroSiteHome">
  <el-container>
      <el-header class="headerTOP">
        <HeroSiteTop></HeroSiteTop>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-footer>
        <HeroSiteFooter></HeroSiteFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import HeroSiteTop from '@/components/HeroSite/HeroSiteTop.vue'
// 底部
import HeroSiteFooter from '@/components/HeroSite/HeroSiteBottom.vue'
</script>
<style scoped lang="scss">
.HeroSiteHome{
width: 100%;
/* 用 100vh 直接取视口高度，不依赖 #app（#app 未设高度，height:100% 会失效） */
height: 100vh;
overflow-y: auto;
}
.headerTOP{
  padding:0;
}
.main{
  padding:0;
}
</style>