<template>
  <div class="HeroSiteHome">
  <el-container>
      <el-header>
        <HeroSiteTop></HeroSiteTop>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script setup>
import HeroSiteTop from '@/components/HeroSite/HeroSiteTop.vue'
</script>

<style scoped lang="scss">
.HeroSiteHome{
width: 100%;
height: 100%;
}
</style>