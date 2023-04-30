export default defineNuxtConfig({
  telemetry: false,
  srcDir: "src/",
  imports: {
    dirs: ["stores", "tools", "adapters"],
  },

  app: {
    head: {
      meta: [{ name: "description", content: "Content" }],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },

  css: ["normalize.css", "@/assets/styles/main.scss"],

  modules: ["@pinia/nuxt"],

  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },

  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET || "api_secret_token",
    public: {
      apiBaseURL:
        process.env.NUXT_PUBLIC_API_BASE_URL ||
        "https://jsonplaceholder.typicode.com",
    },
  },
})
