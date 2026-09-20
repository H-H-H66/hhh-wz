<template>
  <div
    class="header-container-2023"
    :class="{ 'is-home': isHome, 'is-subpage': !isHome }"
    :style="headerStyle"
  >
    <div class="logo-container-logo" @click="drawerVisibles">
      <img src="../../../public/image/banner1/bannerToplogo.webp" />
      <div class="logo-text">
        <img src="../../../public/image/banner1/moreIPButton.png" />
      </div>
    </div>
    <div class="login-container-logo" v-if="isHome">
      <img :src="userStoreInfo.avatar || defaultAvator" />
      <div
        class="login-welcome-2023"
        @click="GotoLogin"
        v-if="!userStoreInfo.username"
      >
        欢迎登录
      </div>
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
    <div class="download-button-2023" v-if="isHome">
      <img src="../../../public/image/banner1/downloadButtonBG.webp" />
      <div class="download-word-2023">查看攻略</div>
    </div>
    <banerTopContent />
    <DrawerBanner v-model:drawerVisible="drawerVisible" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { ArrowDown, User, SwitchButton } from '@element-plus/icons-vue'
import banerTopContent from '../bannerTopContent/bannerTopContent.vue'
import DrawerBanner from '@/components/drawerbanner1/DrawerBanner.vue'
import { useRouter, useRoute } from 'vue-router'
import { userUserStore } from '@/stores/modules/user'

const userStoreInfo = userUserStore()
const router = useRouter()
const route = useRoute()
const scale = ref(1)
const left = ref(0)
const defaultAvator = '/image/banner1/deavator.jpg'
const drawerVisible = ref(false)
const DESIGN_W = 1600
const DESIGN_H = 900

const isHome = computed(() => route.path === '/home')

const headerStyle = computed(() => {
  if (!isHome.value) return {}
  return {
    transform: `scale(${scale.value})`,
    left: `${left.value}px`,
  }
})

function updateLayout() {
  if (!isHome.value) {
    scale.value = 1
    left.value = 0
    return
  }
  const w = window.innerWidth
  const h = window.innerHeight
  const scaleVal = h / DESIGN_H
  scale.value = scaleVal
  left.value = (w - DESIGN_W * scaleVal) / 2
}

const drawerVisibles = () => {
  drawerVisible.value = true
}

onMounted(() => {
  updateLayout()
  window.addEventListener('resize', updateLayout)
})

watch(
  () => route.path,
  () => {
    updateLayout()
  }
)

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout)
})

const GotoLogin = () => {
  router.push('/login')
}
const goProfile = () => {
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

/* 子页：黑底全宽顶栏，不固定，随页面滚动 */
.header-container-2023.is-subpage {
  position: relative;
  left: 0;
  width: 100%;
  height: 66px;
  min-height: 66px;
  padding: 0;
  transform: none;
  background: #000;
  overflow: visible;
}

.header-container-2023.is-subpage .logo-container-logo {
  top: 10px;
}

.header-container-2023.is-subpage :deep(.menu-container-2023) {
  left: 240px;
  top: 0;
  width: min(960px, calc(100% - 280px));
  height: 66px;
  align-items: center;
}

.header-container-2023.is-subpage :deep(.menu1-2023),
.header-container-2023.is-subpage :deep(.box-item) {
  padding-top: 0;
  height: auto;
}

.logo-container-logo {
  position: absolute;
  left: 27px;
  top: 10px;
  cursor: pointer;
  pointer-events: auto;
  img {
    height: 45px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  .logo-text {
    position: absolute;
    left: 173px;
    top: 10px;
    transform: scale(0.8, 0.8);
    img {
      width: 22px;
      height: 15px;
    }
  }
}
.login-container-logo {
  position: absolute;
  right: 90px;
  top: 20px;
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 0 1px rgba(239, 211, 154, 0.45);
  }
  .login-welcome-2023 {
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
.download-button-2023 {
  position: absolute;
  right: 135px;
  top: 19px;
  cursor: pointer;
  user-select: none;
  img {
    width: 100px;
    height: 30px;
  }
  .download-word-2023 {
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
