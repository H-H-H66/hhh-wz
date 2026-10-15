<template>
  <div class="HeroSiteHome" :class="{ 'is-mode-page': isModePage }">
  <el-container>
      <el-header class="headerTOP">
        <HeroSiteTop></HeroSiteTop>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
      <el-footer class="footer-wrap" :class="{ 'is-fixed-wrap': isModePage }">
        <HeroSiteFooter></HeroSiteFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeroSiteTop from '@/components/HeroSite/HeroSiteTop.vue'
// 底部
import HeroSiteFooter from '@/components/HeroSite/HeroSiteBottom.vue'

const route = useRoute()
const isModePage = computed(() => route.path === '/HeroSite/mode')
</script>
<style scoped lang="scss">
.HeroSiteHome{
width: 100%;
/* 用 100vh 直接取视口高度，不依赖 #app（#app 未设高度，height:100% 会失效） */
height: 100vh;
overflow-y: auto;
}
.headerTOP{
  padding: 0;
  height: auto !important;
  overflow: visible;
}
.main{
  padding:0;
  /* Element Plus 默认 overflow:auto，会打断子页面 sticky/吸顶 */
  overflow: visible;
}
/* mode：底栏 fixed 后占位，避免内容被挡住 */
.footer-wrap{
  padding: 0;
  height: auto !important;
}
.footer-wrap.is-fixed-wrap{
  height: 135px !important; /* padding-top 40 + height 95 */
}
</style>
