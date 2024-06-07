<template>
  <div class="p-8 w-dvw h-dvh grid grid-cols-2">
    <section class="flex items-center justify-center">
      <div class="min-w-96 grid gap-16">
        <div class="grid gap-2">
          <h1>Login</h1>
          <p class="opacity-50">
            Please sign in to continue.
          </p>
        </div>

        <form class="grid gap-6" @submit="handleLogin()">
          <div class="grid gap-2">
            <label for="username" class="pl-1">Username</label>
            <input
              v-model="username"
              type="text"
              name="password"
              class="input input-bordered w-full"
            >
          </div>

          <div class="grid gap-2">
            <label for="password" class="pl-1">Password</label>
            <label class="input input-bordered flex items-center gap-2">
              <input
                v-model="password"
                name="password"
                class="grow"
                :type="showPassword ? 'text' : 'password'"
              >
              <button type="button" class="btn btn-square btn-sm btn-ghost" @click="showPassword = !showPassword">
                <icon class="size-5" :name="showPassword ? 'solar:eye-bold-duotone' : 'solar:eye-closed-bold-duotone'" />
              </button>
            </label>
          </div>

          <button type="submit" class="btn btn-primary">
            Login
          </button>

          <div class="flex items-center gap-2">
            <p class="text-sm opacity-50">
              If you dont have an account, Create
            </p>
            <button type="button" class="btn btn-neutral btn-xs">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="size-full bg-gradient-to-b from-primary/75 to-transparent rounded-[3rem] flex items-center justify-center" />
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'empty',
  })

  // data & state
  const username = ref<string>('')
  const password = ref<string>('')
  const showPassword = ref<boolean>(false)

  // methods
  function handleLogin(): void {
    //
  }
</script>

<style scoped>

</style>
