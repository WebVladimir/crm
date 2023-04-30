import appApi from "~/api"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const globalOptions = {
    baseURL: config.public.apiBaseURL,
  }

  const appFetch = (request, options) =>
    $fetch(request, { ...globalOptions, ...options })

  const api = appApi(appFetch)

  return {
    provide: {
      api,
    },
  }
})
