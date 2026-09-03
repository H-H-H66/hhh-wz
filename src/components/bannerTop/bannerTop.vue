<template>
  <div
    class="header-container-2023"
    :style="{
      transform: `scale(${scale})`,
      left: `${left}px`,
    }"
  >
    <div class="logo-container-logo">
      <img src="../../../public/image/banner1/bannerToplogo.webp" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scale = ref(1)
const left = ref(0)

const DESIGN_W = 1600
const DESIGN_H = 900

function updateLayout() {
  const w = window.innerWidth
  const h = window.innerHeight
  // 与 banner 同一套高度缩放 + 水平居中，顶栏仍 fixed 贴顶
  const scaleVal = h / DESIGN_H
  scale.value = scaleVal
  left.value = (w - DESIGN_W * scaleVal) / 2
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
})
</script>

<style scoped>
.header-container-2023 {
  position: fixed;
  top: 0;
  width: 1600px;
  min-height: 80px;
  padding-top: 80px;

  box-sizing: border-box;
  transform-origin: 0% 0%;
  z-index: 100;
  pointer-events: none;
}

.logo-container-logo {
  position: absolute;
  left: 45px;
  top: 10px;
  cursor: pointer;
  pointer-events: auto;
  img {
    height: 45px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
}
</style>
