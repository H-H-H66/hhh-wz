<template>
  <bannerTop></bannerTop>
  <el-carousel
    ref="carouselRef"
    height="100vh"
    direction="vertical"
    :autoplay="false"
    :loop="false"
  >
    <el-carousel-item class="itemone-container">
      <div class="banner-inner" :style="innerStyle">
        <img src="/image/banner1/bg-ClAKvwxK.webp" alt="" />
        <bannerContent></bannerContent>
        <banContNav></banContNav>
      </div>
    </el-carousel-item>

    <el-carousel-item class="itemone-container">
      <div class="banner-inner" :style="innerStyle">
        <img src="/image/banner1/bg-banner1.webp" alt="" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import bannerTop from '@/components/bannerTop/bannerTop.vue'
import bannerContent from '@/components/bannerContent/bannerContent.vue'
import banContNav from '@/components/bannerContent/banContbottom/banContNav.vue'

const carouselRef = ref(null)
let isWheeling = false
const scale = ref(1)
const offsetX = ref(0)
const offsetY = ref(0)

const DESIGN_W = 1920
const DESIGN_H = 900

const innerStyle = computed(() => ({
  transform: `translate(${offsetX.value}px, ${offsetY.value}px) scale(${scale.value})`,
  transformOrigin: 'top left',
  width: `${DESIGN_W}px`,
  height: `${DESIGN_H}px`,
}))

function updateLayout() {
  const w = window.innerWidth
  const h = window.innerHeight
  const scaleVal = h / DESIGN_H
  scale.value = scaleVal
  offsetX.value = (w - DESIGN_W * scaleVal) / 2
  offsetY.value = 0
}

function handleWheel(e) {
  e.preventDefault()
  if (isWheeling || !carouselRef.value) return
  isWheeling = true

  if (e.deltaY > 0) {
    carouselRef.value.next()
  } else {
    carouselRef.value.prev()
  }

  setTimeout(() => {
    isWheeling = false
  }, 600)
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
  window.addEventListener('wheel', handleWheel, { passive: false })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
  window.removeEventListener('wheel', handleWheel)
})
</script>

<style scoped>
.itemone-container {
  position: relative;
  overflow: hidden;
  background-color: transparent;
}

.banner-inner {
  position: relative;
}

.itemone-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

:deep(.el-carousel__indicators--right) {
  display: none;
}
:deep(.el-carousel__item) {
  transition: 0.5s ease !important;
  z-index: 1;
  opacity: 0;
}
:deep(.el-carousel__item.is-active) {
  z-index: 2;
  opacity: 1;
}
</style>
