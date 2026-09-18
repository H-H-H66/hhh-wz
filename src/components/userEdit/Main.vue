<template>
  <section class="main-panel">
    <div class="panel-head">
      <h2>基本资料</h2>
      <p>管理你的账号信息与登录凭证</p>
    </div>

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
import {Guide} from '@element-plus/icons-vue'
import AvatorCoppy from './AvatorCoppy.vue'
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

.profile-card {
  max-width: 520px;
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
