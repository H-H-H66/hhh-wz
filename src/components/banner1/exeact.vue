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
        <img src="../../../public/image/banner1/bg-ClAKvwxK.webp" />
          <bannerContent></bannerContent>
          <banContNav></banContNav>
      </div>
    </el-carousel-item>

    <el-carousel-item class="itemone-container">
      <div class="banner-inner" :style="innerStyle">
        <img src="../../../public/image/banner1/bg-banner1.webp" />
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

// 设计稿尺寸
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
  // 始终按高度缩放，保证拉高/拉矮窗口时画面会变；垂直铺满，水平居中裁切
  const scaleVal = h / DESIGN_H
  scale.value = scaleVal
  offsetX.value = (w - DESIGN_W * scaleVal) / 2
  offsetY.value = 0
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
})

function handleWheel(e) {
  e.preventDefault()
  if (isWheeling) return
  isWheeling = true

  if (e.deltaY > 0) {
    carouselRef.value?.next()
  } else {
    carouselRef.value?.prev()
  }

  setTimeout(() => {
    isWheeling = false
  }, 600)
}

// 修改为两个 onMounted 分开写，或者合并到一起（这里我合并到一个 onMounted 里）
// 注意：如果直接用 window.addEventListener('wheel', ...) 只要在 onMounted 里写一次即可
onMounted(() => {
  // 必须加 passive: false，否则 preventDefault 会失效
  window.addEventListener('wheel', handleWheel, { passive: false })
})

onBeforeUnmount(() => {
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
/* 原代码 n+1 和 2n 的背景色可以删掉，避免露出来 */
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
