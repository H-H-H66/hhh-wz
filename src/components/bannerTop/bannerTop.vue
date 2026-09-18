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
      <img :src="userStoreInfo.avatar || defaultAvator">
      <!-- 有个头像 -->
       <div class="login-welcome-2023" @click="GotoLogin" v-if="!userStoreInfo.username">欢迎登录</div>
      <el-popover
        v-else
        placement="bottom-end"
        :width="168"
        trigger="hover"
        :show-arrow="false"
        popper-class="user-menu-popper"
        :offset="10"
      >
        <template #reference>
          <div class="login-welcome-2023 is-user">
            <span>{{ userStoreInfo.username }}</span>
            <el-icon class="user-caret" :size="12"><ArrowDown /></el-icon>
          </div>
        </template>
        <div class="user-menu">
          <button type="button" class="user-menu-item" @click="goProfile">
            <el-icon :size="15"><User /></el-icon>
            <span>个人中心</span>
          </button>
          <div class="user-menu-divider"></div>
          <button type="button" class="user-menu-item is-danger" @click="logout">
            <el-icon :size="15"><SwitchButton /></el-icon>
            <span>退出系统</span>
          </button>
        </div>
      </el-popover>
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
import { ArrowDown, User, SwitchButton } from '@element-plus/icons-vue'
import banerTopContent from '../bannerTopContent/bannerTopContent.vue'
import DrawerBanner from '@/components/drawerbanner1/DrawerBanner.vue'
import { useRouter } from 'vue-router'
import {userUserStore} from "@/stores/modules/user";
const userStoreInfo = userUserStore();
const router = useRouter()
const scale = ref(1)
const left = ref(0)
const defaultAvator = '/image/banner1/deavator.jpg'
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
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
})
//跳转登录页面
const GotoLogin = ()=>{
  router.push('/login')
}
const goProfile = () => {
  // 个人中心页后续接入
  router.push('/userEdit')
}
const logout = () => {
  userStoreInfo.clearUserInfo()
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
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 0 0 1px rgba(239, 211, 154, 0.45);
    }
    .login-welcome-2023{
      position: absolute;
      display: flex;
      align-items: center;
      gap: 4px;
      color: rgb(255, 255, 255);
      left: 40px;
      top: 3px;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
      transition: color 0.2s ease;

      &:hover,
      &.is-user:hover {
        color: #efd39a;
      }

      .user-caret {
        margin-top: 1px;
        opacity: 0.75;
        transition: transform 0.2s ease;
      }

      &:hover .user-caret {
        transform: rotate(180deg);
        opacity: 1;
      }
    }
}

.user-menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px 0;
}

.user-menu-item {
  appearance: none;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 9px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: #3a2a1a;
  font-size: 13px;
  letter-spacing: 0.04em;
  transition: background 0.18s ease, color 0.18s ease;

  .el-icon {
    color: #8a6a3a;
    transition: color 0.18s ease;
  }

  &:hover {
    background: rgba(201, 164, 93, 0.14);
    color: #7a5818;

    .el-icon {
      color: #a07a2e;
    }
  }

  &.is-danger:hover {
    background: rgba(157, 34, 24, 0.1);
    color: #9d2218;

    .el-icon {
      color: #9d2218;
    }
  }
}

.user-menu-divider {
  height: 1px;
  margin: 4px 10px;
  background: rgba(48, 33, 13, 0.1);
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

<style>
.user-menu-popper.el-popper {
  --el-popover-border-radius: 6px;
  padding: 6px !important;
  background: #fffdf8 !important;
  border: 1px solid rgba(48, 33, 13, 0.12) !important;
  box-shadow: 0 8px 24px rgba(48, 33, 13, 0.14) !important;
}
</style>
