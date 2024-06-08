import { defineStore } from 'pinia'

import type { IUser } from '~/shims/entities'

import { setToken, token } from '~/composables/useAxios'

export const useAuthStore = defineStore('auth', () => {
  // Axios
  const axios = useAxios()

  // State
  const user = ref<IUser>()

  // Getters
  const loggedIn = computed(() => token.value)
  watch(loggedIn, () => {
    location.reload()
  })

  // Actions
  const login = async (username: string, password: string): Promise<void> => {
    await axios.post<IUser>('/login', { username, password })
      .then(async (res) => {
        user.value = res.data
        await navigateTo('/')
      })
  }

  const logout = async (): Promise<void> => {
    setToken('')
  }

  return {
    login,
    logout,
    loggedIn,
 }
})
