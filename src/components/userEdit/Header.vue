<template>
  <header class="header">
    <div class="header-left">
      <span class="eyebrow">欢迎回来</span>
      <span class="title">{{ userStoreInfo.username || '召唤师' }}</span>
    </div>

    <div class="header-right">
      <button type="button" class="btn btn-ghost" @click="goHome">
        <el-icon :size="15"><HomeFilled /></el-icon>
        <span>返回首页</span>
      </button>
      <button type="button" class="btn btn-exit" @click="logout">
        <el-icon :size="15"><SwitchButton /></el-icon>
        <span>退出登录</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { HomeFilled, SwitchButton } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { userUserStore } from '@/stores/modules/user'

const router = useRouter()
const userStoreInfo = userUserStore()

const goHome = () => {
  router.push('/home')
}

const logout = () => {
  userStoreInfo.clearUserInfo()
  router.push('/login')
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-sizing: border-box;
  min-height: 72px;
  padding: 14px 20px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e8ebf0;
}

.header-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  min-width: 0;
}

.eyebrow {
  display: block;
  font-size: 12px;
  line-height: 1.2;
  color: #9aa1ad;
}

.title {
  display: block;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  color: #1f2430;
}

.header-right {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 10px;
}

.btn {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 34px;
  padding: 0 14px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.btn-ghost {
  border: 1px solid #d7dbe3;
  background: #fff;
  color: #1f2430;

  &:hover {
    background: #f5f7fa;
  }
}

.btn-exit {
  border: 1px solid #e5c9c5;
  background: #fff;
  color: #a14a3f;

  &:hover {
    background: #fdf3f1;
    border-color: #d9a59d;
    color: #8f3a30;
  }
}
</style>
