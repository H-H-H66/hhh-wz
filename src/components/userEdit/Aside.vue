<template>
  <aside class="aside">
    <div class="aside-brand">
      <div class="brand-mark">
        <img :src="userStore.avatar || defaultAvator" >
      </div>
      <div class="brand-text">
        <p class="brand-title">个人中心</p>
        <p class="brand-sub">Account Center</p>
      </div>
    </div>

    <nav class="aside-nav">
      <button
        v-for="item in menus"
        :key="item.key"
        type="button"
        class="nav-item"
        :class="{ active: activeKey === item.key }"
        @click="activeKey = item.key"
      >
        <el-icon :size="16"><component :is="item.icon" /></el-icon>
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </aside>
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock, Bell } from '@element-plus/icons-vue'
import {userUserStore} from '@/stores/modules/user'
const userStore = userUserStore()
const activeKey = ref('profile')
const defaultAvator = '/image/banner1/deavator.jpg'
const menus = [
  { key: 'profile', label: '基本资料', icon: User },
  { key: 'security', label: '账号安全', icon: Lock },
  { key: 'notice', label: '消息通知', icon: Bell }
]
</script>

<style scoped>
.aside {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  min-height: calc(100vh - 32px);
  padding: 18px 12px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e8ebf0;
}

.aside-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 8px 16px;
  border-bottom: 1px solid #e8ebf0;
}

.brand-mark {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  /* background: linear-gradient(145deg, #d4b56a, #b8903e); */
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.brand-text {
  min-width: 0;
}

.brand-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  color: #1f2430;
}

.brand-sub {
  margin: 4px 0 0;
  font-size: 11px;
  line-height: 1.2;
  color: #9aa1ad;
}

.aside-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 14px;
}

.nav-item {
  appearance: none;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 11px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #5b6472;
  font-size: 14px;
  line-height: 1.3;
  text-align: left;
  transition: background 0.15s ease, color 0.15s ease;

  .el-icon {
    flex-shrink: 0;
    color: #8b93a1;
  }

  &:hover {
    background: #f5f7fa;
    color: #1f2430;
  }

  &.active {
    background: #f4ead4;
    color: #8a6a22;
    font-weight: 600;

    .el-icon {
      color: #b8903e;
    }
  }
}
</style>
