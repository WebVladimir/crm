import { AntDesignVueResolver } from "unplugin-vue-components/resolvers"
import Components from "unplugin-vue-components/vite"

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
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ resolveIcons: true })],
      }),
    ],
    ssr: {
      noExternal: ["ant-design-vue", "@ant-design/icons-vue"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
  },

  css: [
    "normalize.css",
    "@/assets/styles/main.scss",
    "ant-design-vue/dist/antd.css",
  ],

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
