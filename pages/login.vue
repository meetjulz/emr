<template>
  <div class="p-8 w-dvw h-dvh grid xl:grid-cols-2">
    <section class="flex items-center justify-center">
      <div class="xl:min-w-96 grid gap-16">
        <div class="grid gap-2">
          <h1>Login</h1>
          <p class="opacity-50">
            Please sign in to continue.
          </p>
        </div>

        <form class="grid gap-6 relative" @submit.prevent="handleLogin()">
          <div class="grid gap-2">
            <label for="username" class="pl-1 opacity-50">Username</label>
            <input
              v-model="username"
              type="text"
              name="password"
              class="input input-bordered w-full"
              @input="errorMessage = ''"
            >
          </div>

          <div class="grid gap-2">
            <label for="password" class="pl-1 opacity-50">Password</label>
            <label class="input input-bordered flex items-center gap-2">
              <input
                v-model="password"
                name="password"
                class="grow"
                :type="showPassword ? 'text' : 'password'"
                @input="errorMessage = ''"
              >
              <button type="button" class="btn btn-square btn-sm btn-ghost" @click="showPassword = !showPassword">
                <SolarIcon :name="showPassword ? 'eye' : 'eye-closed'" />
              </button>
            </label>
          </div>

          <span v-if="loading" class="loading text-primary loading-ring loading-xs absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16" />
          <span v-if="errorMessage" class="flex items-center justify-between text-error ring-1 ring-error/15 text-sm px-2 py-1.5 rounded bg-gradient-to-bl from-error/15 to-transparent">
            {{ errorMessage }}
            <SolarIcon name="close-square" class="cursor-pointer" @click="errorMessage = ''" />
          </span>

          <button
            type="submit"
            class="btn btn-primary mt-8"
            :class="[
              { 'pointer-events-none': loading },
            ]"
          >
            Login
          </button>

          <div class="flex flex-wrap items-center gap-2">
            <p class="text-sm opacity-50">
              If you dont have an account, Create one
            </p>
            <button type="button" class="btn border-none text-primary bg-gradient-to-tr from-primary/20 to-primary/5 btn-xs" :class="{ 'pointer-events-none': loading }">
              Register Now
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="size-full bg-gradient-to-b from-primary/25 to-transparent hidden rounded-[3rem] xl:flex items-center justify-center" />
  </div>
</template>

<script setup lang="ts">
  import type { AxiosError } from 'axios'

  definePageMeta({
    layout: 'empty',
  })

  // store
  const authStore = useAuthStore()

  // data & state
  const username = ref<string>('')
  const password = ref<string>('')
  const showPassword = ref<boolean>(false)
  const loading = ref<boolean>(false)
  const errorMessage = ref<string>('')

  // methods
  async function handleLogin(): Promise<void> {
    loading.value = true
    await authStore.login(username.value, password.value)
      .catch((err: AxiosError) => {
        errorMessage.value = err.message
      })
    loading.value = false
  }
</script>

<style scoped>

</style>
