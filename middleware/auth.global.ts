export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  if (!authStore.loggedIn && to.path !== '/login')
    return navigateTo('/login')
  else if (authStore.loggedIn && to.path === '/login')
    return navigateTo('/')
})
