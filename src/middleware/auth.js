export default defineNuxtRouteMiddleware(() => {
  if (isAuthenticated() === false) {
    return navigateTo("/")
  }
})
