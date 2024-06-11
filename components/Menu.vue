<template>
  <div class="min-h-full bg-base-200">
    <ul class="p-4 w-80 flex flex-col gap-1">
      <!-- Sidebar content here -->
      <li v-for="(menu, m) of menus" :key="m">
        <NuxtLink
          class="flex items-center gap-3 px-3 min-h-11 cursor-pointer rounded-lg"
          :to="menu.to"
          :class="[
            route.path === menu.to ? 'bg-neutral text-neutral-content' : 'hover:bg-neutral/15 text-base-content',
            cn('opacity-75', { 'opacity-100': route.path === menu.to }),
          ]"
        >
          <SolarIcon
            :variant="route.path === menu.to ? 'bold-duotone' : 'outline'"
            :name="menu.icon"
            :class="cn('opacity-75', { 'opacity-100': route.path === menu.to })"
          />
          <span>{{ menu.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import type { IMenu } from '~/shims/entities'

  // composables
  const route = useRoute()

  // data & state
  const menus = ref<IMenu[]>([
    {
      title: 'Dashboard',
      to: '/',
      icon: 'home-smile-angle',
    },
    {
      title: 'Medical Records',
      to: '/medical-records',
      icon: 'folder-with-files',
    },
    {
      title: 'Appointments',
      to: '/appointments',
      icon: 'calendar-mark',
    },
    {
      title: 'Medical Bills',
      to: '/medical-bills',
      icon: 'wad-of-money',
    },
    {
      title: 'Medications',
      to: '/medications',
      icon: 'stethoscope',
    },
    {
      title: 'Labs',
      to: '/labs',
      icon: 'test-tube-minimalistic',
    },
    {
      title: 'Messages',
      to: '/messages',
      icon: 'chat-round-line',
    },
    {
      title: 'Account Settings',
      to: '/account-settings',
      icon: 'settings-minimalistic',
    },
  ])
</script>

<style scoped>

</style>
