<template>
  <div class="login-page" :class="{ 'is-register': isRegister }">
    <div class="bg-layer bg-login"></div>
    <div class="bg-layer bg-register"></div>
    <div class="bg-mask"></div>

    <div class="auth-card">
      <div class="frame-corner tl"></div>
      <div class="frame-corner tr"></div>
      <div class="frame-corner bl"></div>
      <div class="frame-corner br"></div>

      <div class="mode-tabs">
        <button
          type="button"
          class="mode-tab"
          :class="{ active: !isRegister }"
          @click="isRegister = false"
        >
          登录
        </button>
        <span class="mode-divider" aria-hidden="true"></span>
        <button
          type="button"
          class="mode-tab"
          :class="{ active: isRegister }"
          @click="isRegister = true"
        >
          注册
        </button>
      </div>

      <el-form
        :model="formModel"
        :rules="rules"
        ref="form"
        size="large"
        autocomplete="off"
        class="auth-form"
        @submit.prevent
      >
        <el-form-item prop="username">
          <el-input
            v-model="formModel.username"
            :prefix-icon="User"
            placeholder="请输入用户名"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="formModel.password"
            :prefix-icon="Lock"
            type="password"
            show-password
            placeholder="请输入密码"
          />
        </el-form-item>

        <el-form-item v-if="isRegister" prop="repassword">
          <el-input
            v-model="formModel.repassword"
            :prefix-icon="Lock"
            type="password"
            show-password
            placeholder="请再次输入密码"
          />
        </el-form-item>

        <div v-if="!isRegister" class="meta-row">
          <el-checkbox v-model="remember" class="remember">记住我</el-checkbox>
          <button type="button" class="ghost-link">忘记密码？</button>
        </div>

        <button type="button" class="submit-btn" @click="onSubmit">
          <span>{{ isRegister ? '注 册' : '登 录' }}</span>
        </button>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'

const form = ref()
const isRegister = ref(false)
const remember = ref(false)

const formModel = ref({
  username: '',
  password: '',
  repassword: ''
})

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 10, message: '用户名必须是3-10位字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位字符，且不能有空格',
      trigger: 'blur'
    }
  ],
  repassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      pattern: /^\S{6,15}$/,
      message: '密码必须是6-15位字符，且不能有空格',
      trigger: 'blur'
    },
    {
      validator: (_rule, value, callback) => {
        if (value !== formModel.value.password) {
          callback(new Error('两次密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ]
}

// 切换登录/注册：清空数据 + 清掉校验提示（共用同一个 el-form）
watch(isRegister, async () => {
  formModel.value = {
    username: '',
    password: '',
    repassword: ''
  }
  await nextTick()
  form.value?.clearValidate()
})

const onSubmit = async () => {
  if(isRegister.value){
    await form.value.validate()
    localStorage.setItem('userinfo',JSON.stringify(formModel.value))
    ElMessage.success("成功注册")
    isRegister.value=false

  }
}
</script>

<style scoped lang="scss">
.login-page {
  --gold: #efd39a;
  --gold-deep: #c9a45d;
  --ink: rgba(16, 4, 3, 0.62);
  --text: #fff4e4;
  --muted: rgba(255, 244, 228, 0.55);
  --title-font: 'STXingkai', 'STKaiti', 'KaiTi', 'Songti SC', 'SimSun', serif;

  position: relative;
  display: grid;
  place-items: center;
  min-height: 100vh;
  overflow: hidden;
  background: #140303;
}

.bg-layer,
.bg-mask {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.bg-layer {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0;
  transition: opacity 0.55s ease;
  transform: scale(1.02);
}

.bg-login {
  background-image: url('/image/login/Loginimage.png');
  opacity: 1;
}

.bg-register {
  background-image: url('/image/login/Rejectimage.png');
}

.login-page.is-register {
  .bg-login {
    opacity: 0;
  }

  .bg-register {
    opacity: 1;
  }
}

.bg-mask {
  z-index: 0;
  background: radial-gradient(
    ellipse at 50% 58%,
    rgba(0, 0, 0, 0.18),
    rgba(0, 0, 0, 0.55) 70%
  );
}

.auth-card {
  position: relative;
  z-index: 1;
  width: min(400px, calc(100vw - 40px));
  padding: 34px 36px 32px;
  background: var(--ink);
  border: 1px solid rgba(239, 211, 154, 0.28);
  backdrop-filter: blur(14px) saturate(1.1);
  -webkit-backdrop-filter: blur(14px) saturate(1.1);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 230, 180, 0.08);
  animation: card-in 0.65s cubic-bezier(0.22, 1, 0.36, 1) both;

  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(239, 211, 154, 0.14);
    pointer-events: none;
  }
}

.frame-corner {
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: var(--gold-deep);
  border-style: solid;
  opacity: 0.9;
  pointer-events: none;

  &.tl {
    top: -1px;
    left: -1px;
    border-width: 2px 0 0 2px;
  }
  &.tr {
    top: -1px;
    right: -1px;
    border-width: 2px 2px 0 0;
  }
  &.bl {
    bottom: -1px;
    left: -1px;
    border-width: 0 0 2px 2px;
  }
  &.br {
    bottom: -1px;
    right: -1px;
    border-width: 0 2px 2px 0;
  }
}

.mode-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-bottom: 28px;
}

.mode-tab {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0 2px 8px;
  cursor: pointer;
  font-family: var(--title-font);
  font-size: 28px;
  letter-spacing: 0.2em;
  text-indent: 0.2em;
  color: var(--muted);
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--gold), transparent);
    transform: translateX(-50%);
    transition: width 0.25s ease;
  }

  &:hover {
    color: rgba(255, 244, 228, 0.85);
  }

  &.active {
    color: var(--gold);

    &::after {
      width: 100%;
    }
  }
}

.mode-divider {
  width: 1px;
  height: 18px;
  background: rgba(239, 211, 154, 0.28);
}

.auth-form {
  :deep(.el-form-item) {
    margin-bottom: 16px;
  }

  :deep(.el-form-item__content) {
    display: block;
  }

  :deep(.el-form-item__error) {
    color: #ffc2ad;
  }
}

.meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px;
}

.remember {
  :deep(.el-checkbox__label) {
    color: var(--muted);
    font-size: 13px;
  }

  :deep(.el-checkbox__inner) {
    background: transparent;
    border-color: rgba(239, 211, 154, 0.4);
  }

  :deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
    background: #9d2218;
    border-color: var(--gold-deep);
  }

  :deep(.el-checkbox__input.is-checked + .el-checkbox__label) {
    color: var(--text);
  }
}

.ghost-link {
  appearance: none;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  font-size: 13px;
  color: var(--gold-deep);
  transition: color 0.2s ease;

  &:hover {
    color: var(--gold);
  }
}

.submit-btn {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 48px;
  margin-top: 4px;
  border: 1px solid rgba(239, 211, 154, 0.45);
  background: linear-gradient(180deg, #b52c22 0%, #7f1510 100%);
  color: var(--text);
  cursor: pointer;
  font-family: var(--title-font);
  font-size: 22px;
  letter-spacing: 0.36em;
  text-indent: 0.36em;
  transition: filter 0.2s ease, transform 0.15s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      110deg,
      transparent 20%,
      rgba(255, 236, 190, 0.22) 45%,
      transparent 70%
    );
    transform: translateX(-120%);
    transition: transform 0.55s ease;
  }

  &:hover {
    filter: brightness(1.08);

    &::before {
      transform: translateX(120%);
    }
  }

  &:active {
    transform: translateY(1px);
  }

  span {
    position: relative;
    z-index: 1;
  }
}

:deep(.el-input__wrapper) {
  background: rgba(0, 0, 0, 0.28) !important;
  border-radius: 0 !important;
  box-shadow: inset 0 -1px 0 rgba(239, 211, 154, 0.35) !important;
  transition: background 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.36) !important;
    box-shadow: inset 0 -1px 0 rgba(239, 211, 154, 0.55) !important;
  }

  &.is-focus {
    background: rgba(0, 0, 0, 0.42) !important;
    box-shadow: inset 0 -2px 0 var(--gold) !important;
  }
}

:deep(.el-input__inner) {
  height: 44px;
  color: var(--text) !important;

  &::placeholder {
    color: rgba(255, 244, 228, 0.35);
  }
}

:deep(.el-input__prefix),
:deep(.el-input__suffix) {
  color: rgba(239, 211, 154, 0.65);
}

@keyframes card-in {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 480px) {
  .auth-card {
    padding: 28px 22px 24px;
  }

  .mode-tab {
    font-size: 24px;
  }
}
</style>
