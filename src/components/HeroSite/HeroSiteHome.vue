<template>
    <div>
        <HeroSiteBanner></HeroSiteBanner>
        <HeroSiteSkin></HeroSiteSkin>
        <HeroSiteHero></HeroSiteHero>
        <HeroSiteOther></HeroSiteOther>
    </div>
</template>

<script setup>
// 轮播图
import HeroSiteBanner from '@/components/HeroSite/HeroSiteBanner.vue'
// 皮肤
import HeroSiteSkin from '@/components/HeroSite/HeroSiteSkin.vue'
// 英雄
import HeroSiteHero from '@/components/HeroSite/HeroSiteHero.vue'
// 其他
import HeroSiteOther from '@/components/HeroSite/HeroSiteOther.vue'
</script>

<style lang="scss" scoped>

</style>