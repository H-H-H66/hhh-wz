<template>
  <div
    class="header-container-2023"
    :style="{
      transform: `scale(${scale})`,
      left: `${left}px`,
    }"
  >
    <div class="logo-container-logo" @click="drawerVisibles">
      <img src="../../../public/image/banner1/bannerToplogo.webp" />
      <div class="logo-text">
        <img src="../../../public/image/banner1/moreIPButton.png">
      </div>
    </div>
    <div class="login-container-logo">
      <img src="/public/image/banner1/deavator.jpg">
      <!-- 有个头像 -->
       <div class="login-welcome-2023" @click="GotoLogin">{{userStoreInfo.username || 欢迎登录}}</div>
    </div>
    <div class="download-button-2023">
      <img src="../../../public/image/banner1/downloadButtonBG.webp">
      <div class="download-word-2023">查看攻略</div>
    </div>
    <banerTopContent></banerTopContent>
    <DrawerBanner v-model:drawerVisible="drawerVisible"></DrawerBanner>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import banerTopContent from '../bannerTopContent/bannerTopContent.vue'
import DrawerBanner from '@/components/drawerbanner1/DrawerBanner.vue'
import { useRouter } from 'vue-router'
import {userUserStore} from "@/stores/modules/user";
const userStoreInfo = userUserStore();
const router = useRouter()
const scale = ref(1)
const left = ref(0)
const drawerVisible = ref(false)
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
//点击打开抽屉
const drawerVisibles = ()=>{
  drawerVisible.value = true;
}
onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
  console.log('mounted',userStoreInfo.username)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
})
//跳转登录页面
const GotoLogin = ()=>{
  router.push('/login')
}
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
}

.logo-container-logo {
  position: absolute;
  left:27px;
  top: 10px;
  cursor: pointer;
  pointer-events: auto;
  img {
    height: 45px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .logo-text{
    position: absolute;
    left: 173px;
    top: 10px;
    transform: scale(0.8, 0.8);
    img{
      width:22px;
      height:15px;
    }
  }

}
.login-container-logo{
    position: absolute;
    right: 90px;
    top: 20px;
    img{
      width:30px;
      height:30px;
    }
    .login-welcome-2023{
      position: absolute;
      color: rgb(255, 255, 255);
      left: 40px;
      top: 3px;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
    }
}
.download-button-2023{
    position: absolute;
    /* display: none; */
    right: 135px;
    top: 19px;
    cursor: pointer;
    user-select: none;
      img{
      width: 100px;
      height: 30px;
    }
    .download-word-2023{
    position: absolute;
    width: 124px;
    height: 38px;
    left: -9px;
    top: -4px;
    line-height: 38px;
    font-size: 14px;
    font-weight: bold;
    color: #30210d;
    text-align: center;
    }
    }
</style>
