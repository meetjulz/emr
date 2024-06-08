import type { AxiosError, AxiosInstance, AxiosResponse } from 'axios'

import { get, set } from '@vueuse/core'
import axios from 'axios'

const token = useLocalStorage('token', '')
const _token = readonly(token)

function getBearer(): string {
  return `Bearer ${get(token)}`
}

function useAxios(): AxiosInstance {
  const config = useRuntimeConfig()
  const instance = axios.create({
    baseURL: String(config.public.baseUrl),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })

  if (get(token))
    instance.defaults.headers.common.Authorization = getBearer()
  watch(token, (newToken) => {
    if (newToken)
      instance.defaults.headers.common.Authorization = getBearer()
  })

  instance.interceptors.response.use((response: AxiosResponse) => {
    return response
  }, (error: AxiosError) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403))
      setToken('')

    return Promise.reject(error)
  })

  return instance
}

function setToken(value: string): void {
  set(token, value)
}

export {
  _token as token,
  setToken,
  useAxios,
}
