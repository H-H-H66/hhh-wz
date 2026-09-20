<template>
  <section class="main-panel">
    <div class="panel-head">
      <h2>账号安全</h2>
      <p>管理你的账号信息与登录凭证</p>
    </div>
    <div class="cardList">
    <div class="profile-card">
      <div class="avatar-block">
        <img class="avatar" :src="userStoreInfo.avatar || defaultAvatar" alt="avatar" />
        <div class="avatar-meta">
          <p class="name">{{ userStoreInfo.username || '未登录' }}</p>
          <p class="hint">
            <el-icon :size="16"><Guide /></el-icon>
            <span v-if="!userStoreInfo.profile">不要等到失去了,才懂得珍惜</span>
            <span v-else>{{ userStoreInfo.profile }}</span>
          </p>
        </div>
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          :auto-upload="false"
          accept="image/jpeg,image/png,image/webp,image/gif"
          :on-change="onAvatarChange"
        >
          <el-button class="EditAvatar" type="primary">修改头像</el-button>
        </el-upload>
      </div>

      <el-form 
      label-position="top" 
      class="profile-form" 
      @submit.prevent 
      ref="FormRef"
      :rules="rules"
      :model="form"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item label="简介" prop="profile">
           <el-input
                v-model="form.profile"
                class="jianjie"
                type="textarea"
                :rows="4"
                maxlength="50"
                show-word-limit
                resize="none"
                placeholder="请输入简介"
                  />
        </el-form-item>
        <div class="form-actions">
          <button type="button" class="save-btn" @click="onSave">保存修改</button>
        </div>
      </el-form>
    </div>
    <div class="card-right">
      <div class="detail-head">
        <h2>资料概览</h2>
      </div>
      <div class="overview-top">
        <div class="resources">
          <div class="detail-item">
            <div class="detail-label">账号注册</div>
            <div class="detail-value">2026.09</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">最近登录</div>
            <div class="detail-value">今天</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">绑定手机</div>
            <div class="detail-value">未绑定</div>
          </div>
        </div>
        <div class="overview-user">
          <img
            class="overview-avatar"
            :src="userStoreInfo.avatar || defaultAvatar"
            alt="avatar"
          />
          <div class="overview-name">{{ userStoreInfo.username || '未登录' }}</div>
          <div class="overview-status">
            <span class="status-dot"></span>
            <span>账号正常</span>
          </div>
        </div>
      </div>

      <div class="overview-bottom">
        <div class="security-card">
          <div class="security-icon">
            <el-icon :size="28"><CircleCheckFilled /></el-icon>
          </div>
          <div class="security-body">
            <div class="security-title-row">
              <span class="security-title">安全等级：高</span>
              <span class="security-score">92</span>
            </div>
            <div class="security-bar">
              <div class="security-bar-inner" style="width: 92%"></div>
            </div>
            <p class="security-tip">已开启登录保护，建议继续完善手机绑定</p>
          </div>
        </div>
        <div class="security-actions">
          <button type="button" class="ghost-action">查看账号安全</button>
          <button type="button" class="ghost-action">设置隐私权限</button>
        </div>
      </div>
    </div>

    <div class="card-side">
      <div class="detail-head">
        <h2>近期动态</h2>
      </div>
      <div class="activity-box">
        <ul class="activity-list">
          <li class="activity-item">
            <span class="activity-dot is-gold"></span>
            <div class="activity-body">
              <p class="activity-title">更新了个人头像</p>
              <p class="activity-time">今天 15:32</p>
            </div>
          </li>
          <li class="activity-item">
            <span class="activity-dot is-blue"></span>
            <div class="activity-body">
              <p class="activity-title">修改了账号简介</p>
              <p class="activity-time">今天 14:08</p>
            </div>
          </li>
          <li class="activity-item">
            <span class="activity-dot is-green"></span>
            <div class="activity-body">
              <p class="activity-title">登录成功 · 本机</p>
              <p class="activity-time">今天 09:20</p>
            </div>
          </li>
          <li class="activity-item">
            <span class="activity-dot is-gray"></span>
            <div class="activity-body">
              <p class="activity-title">账号注册完成</p>
              <p class="activity-time">2026.09.18</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="side-tips-group">
        <div class="side-tips is-warn">
          <p class="tips-title">安全提醒</p>
          <p class="tips-text">检测到尚未绑定手机，建议尽快完成验证以保护账号安全。</p>
        </div>
        <div class="side-tips">
          <p class="tips-title">小提示</p>
          <p class="tips-text">绑定手机后可提升安全等级，并开启异地登录提醒。</p>
        </div>
      </div>
    </div>
    </div>
  </section>
  <AvatorCoppy  
  v-model="cropVisible"
  :file="cropFile"
  shape="circle"
  :aspect-ratio="1"
  :output-width="400"
  :output-height="400"
  @confirm="onCropConfirm">
  </AvatorCoppy>
</template>

<script setup>
import { reactive } from 'vue'
import { userUserStore } from '@/stores/modules/user'
import {Guide, CircleCheckFilled} from '@element-plus/icons-vue'
import AvatorCoppy from '../userEdit/AvatorCoppy.vue'
const cropVisible = ref(false)
const cropFile = ref(null)
const defaultAvatar = '/image/banner1/deavator.jpg'
const userStoreInfo = userUserStore()
const MAX_AVATAR_SIZE = 1024 * 1024 * 15// 15MB
const form = reactive({
  username: userStoreInfo.username || '',
  password: userStoreInfo.password || '',
  profile: userStoreInfo.profile || ''
})
const onAvatarChange = (uploadFile)=>{
    const raw = uploadFile.raw
    if(!raw) return 
    if(raw.size > MAX_AVATAR_SIZE){
      ElMessage.warning('头像大小不能超过15MB')
      return 
    }
    if(!raw.type.startsWith('image')){
      ElMessage.error('只能上传图片文件')
      return 
    }
    cropFile.value = raw
    cropVisible.value = true
}
const onCropConfirm = (file) => {
  const reader = new FileReader()
  reader.onload = () => {
    userStoreInfo.setAvatar(reader.result) // base64 本地存
    ElMessage.success('头像已更新')
  }
  reader.readAsDataURL(file)
}
const onSave = () => {
  if (!form.username || !form.password) {
    ElMessage.warning('请填写完整信息')
    return
  }
  userStoreInfo.setUserInfo({
    username: form.username,
    password: form.password,
    repassword: form.password,
    profile:form.profile

  })
  localStorage.setItem(
    'userinfo',
    JSON.stringify({
      username: form.username,
      password: form.password,
      repassword: form.password,
      profile:form.profile
    })
  )
  ElMessage.success('资料已更新')
}
const rules = {
  username:[
    {required: true, message: '请输入用户名', trigger: 'blur'},
    { min: 3, max: 10, message: '用户名必须是3-10位字符', trigger: 'blur' }
  ],
  password:[
     { required: true, message: '请输入密码', trigger: 'blur' },
     {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位字符，且不能有空格',
      trigger: 'blur'
     }
  ]
}
</script>

<style scoped>
.main-panel {
  /* 简介框依赖这两个变量；之前没定义所以背景/文字色等于没生效 */
  --app-infomatin-upavator: #f7f8fa;
  --app-infomatin-upavator-text: #1f2430;

  box-sizing: border-box;
  min-height: calc(100vh - 120px);
  padding: 22px 24px 28px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e8ebf0;
  user-select: none;
}

.panel-head {
  margin-bottom: 22px;

  h2 {
    margin: 0;
    font-size: 18px;
    line-height: 1.4;
    color: #1f2430;
  }

  p {
    margin: 8px 0 0;
    font-size: 13px;
    line-height: 1.4;
    color: #8b93a1;
  }
}
.cardList {
  display: flex;
  align-items: stretch;
  gap: 20px;
  flex-wrap: wrap;
}

.profile-card {
  flex: 1 1 340px;
  min-width: 300px;
  max-width: 420px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid #e8ebf0;
  background: #fff;
  box-shadow:
    0 6px 18px rgba(31, 36, 48, 0.08),
    0 2px 6px rgba(31, 36, 48, 0.04);
}

.card-right {
  flex: 1 1 360px;
  min-width: 300px;
  max-width: 480px;
  padding: 16px 18px 18px;
  border-radius: 12px;
  border: 1px solid #e8ebf0;
  background: #fff;
  box-shadow:
    0 6px 18px rgba(31, 36, 48, 0.08),
    0 2px 6px rgba(31, 36, 48, 0.04);
}

.card-side {
  flex: 1 1 260px;
  min-width: 240px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 16px 18px 18px;
  border-radius: 12px;
  border: 1px solid #e8ebf0;
  background: #fff;
  box-shadow:
    0 6px 18px rgba(31, 36, 48, 0.08),
    0 2px 6px rgba(31, 36, 48, 0.04);
}

.activity-box {
  max-height: 220px;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #eef0f4;
  background: #fafbfc;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c9ced6;
    border-radius: 999px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #aeb4bf;
  }
}

.activity-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.activity-dot {
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-top: 6px;
  border-radius: 50%;

  &.is-gold {
    background: #b8903e;
  }
  &.is-blue {
    background: #3b82f6;
  }
  &.is-green {
    background: #22a06b;
  }
  &.is-gray {
    background: #9aa1ad;
  }
}

.activity-body {
  min-width: 0;
}

.activity-title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #1f2430;
  line-height: 1.35;
}

.activity-time {
  margin: 4px 0 0;
  font-size: 12px;
  color: #9aa1ad;
  line-height: 1.2;
}

.side-tips-group {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.side-tips {
  padding: 12px;
  border-radius: 10px;
  background: #f7f8fa;
  border: 1px solid #eef0f4;

  &.is-warn {
    background: #fff8f0;
    border-color: #f0e0c8;
  }
}

.tips-title {
  margin: 0;
  font-size: 13px;
  font-weight: 700;
  color: #1f2430;
}

.tips-text {
  margin: 6px 0 0;
  font-size: 12px;
  color: #7a8794;
  line-height: 1.5;
}

.detail-head {
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #1f2430;
  }
}

.overview-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.resources {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 8px 8px 0;
}

.detail-item {
  flex: 1;
  min-width: 0;
  text-align: center;
}

.detail-label {
  margin-bottom: 10px;
  font-size: 13px;
  color: #8b93a1;
  line-height: 1.2;
}

.detail-value {
  font-size: 22px;
  font-weight: 700;
  color: #1f2430;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

.overview-user {
  flex-shrink: 0;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.overview-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 0 0 1px #e8ebf0, 0 6px 16px rgba(31, 36, 48, 0.08);
}

.overview-name {
  margin-top: 10px;
  font-size: 15px;
  font-weight: 700;
  color: #1f2430;
  line-height: 1.3;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.overview-status {
  margin-top: 6px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #5b6472;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
}

.overview-bottom {
  margin-top: 18px;
  padding-top: 16px;
  border-top: 1px solid #eef0f4;
}

.security-card {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  border-radius: 10px;
  background: linear-gradient(135deg, #f3fbf6 0%, #f7f8fa 100%);
  border: 1px solid #e3f2e8;
}

.security-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: #fff;
  color: #22a06b;
  box-shadow: 0 2px 8px rgba(34, 160, 107, 0.12);
}

.security-body {
  flex: 1;
  min-width: 0;
}

.security-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.security-title {
  font-size: 14px;
  font-weight: 700;
  color: #1f2430;
}

.security-score {
  font-size: 18px;
  font-weight: 700;
  color: #22a06b;
}

.security-bar {
  margin-top: 8px;
  height: 8px;
  border-radius: 999px;
  background: #e6eee9;
  overflow: hidden;
}

.security-bar-inner {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #3ecf8e, #22a06b);
}

.security-tip {
  margin: 8px 0 0;
  font-size: 12px;
  color: #7a8794;
  line-height: 1.4;
}

.security-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.ghost-action {
  appearance: none;
  height: 34px;
  padding: 0 14px;
  border-radius: 8px;
  border: 1px solid #d7dbe3;
  background: #fff;
  color: #1f2430;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f5f7fa;
    border-color: #c9a45d;
    color: #8a6a22;
  }
}
.jianjie {
  width: 100%;

  :deep(.el-textarea__inner) {
    min-height: 102px !important;
    padding: 8px 11px 28px;
    background: var(--app-infomatin-upavator) !important;
    border: 1px solid #e8ebf0 !important;
    border-radius: 8px;
    box-shadow: none !important;
    color: var(--app-infomatin-upavator-text) !important;
    caret-color: var(--app-infomatin-upavator-text);
    font-size: 14px;
    line-height: 1.5;
    resize: none;

    &:hover {
      border-color: #b8903e !important;
    }

    &:focus {
      border-color: #b8903e !important;
      background: var(--app-infomatin-upavator) !important;
      box-shadow: none !important;
    }
  }

  :deep(.el-input__count) {
    background: transparent;
    color: #9aa1ad;
    bottom: 8px;
    right: 12px;
    pointer-events: none;
  }
}

.avatar-block {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;
  padding: 14px 16px;
  border-radius: 10px;
  background: #f7f8fa;
  border: 1px solid #e8ebf0;
}

.avatar {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 0 0 1px #e8ebf0;
}

.avatar-meta {
  flex: 1;
  min-width: 0;
}

.EditAvatar {
  flex-shrink: 0;
}

.avatar-uploader {
  margin-left: auto;
  flex-shrink: 0;
}

.name {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
  color: #1f2430;
}

.hint {
  margin: 6px 0 0;
  font-size: 12px;
  line-height: 1.3;
  color: #9aa1ad;
  display: flex;
  align-items: center;

  span {
    white-space: nowrap;
    margin-left: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    word-break: break-word;
  }
}

.profile-form {
  :deep(.el-form-item__label) {
    color: #5b6472;
    font-weight: 600;
    line-height: 1.4;
  }

  :deep(.el-input__wrapper) {
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 0 1px #d7dbe3 inset;
  }

  :deep(.el-input__wrapper.is-focus) {
    box-shadow: 0 0 0 1px #b8903e inset;
  }
}

.form-actions {
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

.save-btn {
  appearance: none;
  border: 0;
  height: 40px;
  padding: 0 22px;
  border-radius: 8px;
  cursor: pointer;
  background: #b8903e;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  transition: background 0.15s ease, transform 0.12s ease;

  &:hover {
    background: #a37d32;
  }

  &:active {
    transform: translateY(1px);
  }
}
</style>
