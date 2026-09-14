<template>
  <div class="left-zone">
    <el-carousel height="216px" >
      <el-carousel-item v-for="item in dataImg" :key="item.src">
        <img :src="item.src" :alt="item.alt" style="width: 100%; height: 100%; object-fit: cover;">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const dataImg = ref(
  [
    {src:'/public/image/banner1/fs.jpg',alt:'图片1'},
    {src:'/public/image/banner1/lb.jpg',alt:'图片2'},
    {src:'/public/image/banner1/kt.jpg',alt:'图片3'},
    {src:'/public/image/banner1/sh.jpg',alt:'图片4'},
    {src:'/public/image/banner1/wx.png',alt:'图片5'},
  ]
)
</script>

<style scoped lang="scss">
.left-zone {
  width: 438px;
  height: 216px;
  overflow: hidden;
  border-radius: 8px;
}

:deep(.el-carousel) {
  width: 438px;
  height: 216px;
}

:deep(.el-carousel__container) {
  width: 438px !important;
  height: 216px;
}

:deep(.el-carousel__item) {
  width: 438px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #99a9bf;
}

:deep(.el-carousel__item h3) {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}


</style>
