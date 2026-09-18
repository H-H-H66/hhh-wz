import { defineStore } from 'pinia'
import { ref } from 'vue'

export const DEFAULT_AVATAR = '/image/banner1/deavator.jpg'
const PROFILE_STORAGE_KEY = 'mjtv-user-profiles'

const readProfiles = () => {
  try {
    return JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

const writeProfiles = (map) => {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(map))
}

/** 按用户名读取长期保存的头像/简介 */
const getSavedProfile = (username) => {
  if (!username) {
    return { avatar: DEFAULT_AVATAR, profile: '' }
  }
  const saved = readProfiles()[username]
  return {
    avatar: saved?.avatar || DEFAULT_AVATAR,
    profile: saved?.profile || ''
  }
}

/** 按用户名写入头像/简介（退出登录也不会丢） */
const saveProfileByUsername = (username, data) => {
  if (!username) return
  const map = readProfiles()
  map[username] = {
    avatar: data.avatar || DEFAULT_AVATAR,
    profile: data.profile ?? map[username]?.profile ?? ''
  }
  writeProfiles(map)
}

export const userUserStore = defineStore(
  'user',
  () => {
    const username = ref('')
    const password = ref('')
    const repassword = ref('')
    const profile = ref('')
    const avatar = ref(DEFAULT_AVATAR)

    const setUserInfo = (info) => {
      username.value = info.username
      password.value = info.password
      repassword.value = info.repassword

      const saved = getSavedProfile(info.username)

      // 优先用本次传入的值，否则用该账号已保存的头像/简介
      if (info.profile !== undefined) {
        profile.value = info.profile
      } else {
        profile.value = saved.profile
      }

      if (info.avatar !== undefined) {
        avatar.value = info.avatar || DEFAULT_AVATAR
      } else {
        avatar.value = saved.avatar
      }

      saveProfileByUsername(username.value, {
        avatar: avatar.value,
        profile: profile.value
      })
    }

    const setAvatar = (url) => {
      avatar.value = url || DEFAULT_AVATAR
      if (username.value) {
        saveProfileByUsername(username.value, {
          avatar: avatar.value,
          profile: profile.value
        })
      }
    }

    /** 新注册账号：写入默认头像 */
    const registerNewUser = (name) => {
      if (!name) return
      saveProfileByUsername(name, {
        avatar: DEFAULT_AVATAR,
        profile: ''
      })
    }

    const clearUserInfo = () => {
      // 只清登录态；头像/简介已按用户名存在 localStorage，下次登录会还原
      username.value = ''
      password.value = ''
      repassword.value = ''
      profile.value = ''
      avatar.value = DEFAULT_AVATAR
    }

    return {
      username,
      password,
      repassword,
      profile,
      avatar,
      setUserInfo,
      setAvatar,
      registerNewUser,
      clearUserInfo
    }
  },
  {
    persist: {
      key: 'mjtv-userinfo-store',
      // 会话字段即可；头像长期数据在 mjtv-user-profiles
      pick: ['username', 'password', 'repassword', 'profile', 'avatar']
    }
  }
)
