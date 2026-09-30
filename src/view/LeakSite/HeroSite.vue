<template>
  <div class="HeroSiteHome">
  <el-container>
      <el-header class="headerTOP">
        <HeroSiteTop></HeroSiteTop>
      </el-header>
      <el-main class="main">
             <!-- 轮播图 -->
        <HeroSiteBanner></HeroSiteBanner>
             <!-- 皮肤 -->
        <HeroSiteSkin></HeroSiteSkin>
             <!-- 英雄 -->
        <HeroSiteHero></HeroSiteHero>
             <!-- 其他 -->
        <HeroSiteOther></HeroSiteOther>
      </el-main>
      <el-footer>
        <HeroSiteFooter></HeroSiteFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import HeroSiteTop from '@/components/HeroSite/HeroSiteTop.vue'
// 轮播图
import HeroSiteBanner from '@/components/HeroSite/HeroSiteBanner.vue'
// 皮肤
import HeroSiteSkin from '@/components/HeroSite/HeroSiteSkin.vue'
// 英雄
import HeroSiteHero from '@/components/HeroSite/HeroSiteHero.vue'
// 其他
import HeroSiteOther from '@/components/HeroSite/HeroSiteOther.vue'
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