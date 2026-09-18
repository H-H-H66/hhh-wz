import { defineStore } from 'pinia'
import {ref} from 'vue'
export const userUserStore = defineStore('user',()=>{
  const username = ref('')
  const password = ref('')
  const repassword = ref('')
  const setUserInfo = (info)=>{
   username.value = info.username
   password.value = info.password
   repassword.value = info.repassword
  }

  const clearUserInfo = () => {
    username.value = ''
    password.value = ''
    repassword.value = ''
  }

return {username,password,repassword,setUserInfo,clearUserInfo}
},
{
  persist: {
    key: 'mjtv-userinfo-store',
    pick: ['username', 'password', 'repassword'],
  },
})
