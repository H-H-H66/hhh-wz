<template>
  <div class="HeroSkinDetail">
   <img src=""></img>
  </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
const route= useRoute()
const HeroId = route.params.id
console.log(HeroId)
</script>

<style lang="scss" scoped>
.HeroSkinDetail{
    min-width: 1200px;
    margin: auto;
    width: 100%;
    max-width: 1920px;
    position: relative;
    text-align: center;
}
h1{
  color: red;
}
</style>