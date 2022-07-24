import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Wesam Jabali",
      titleTemplate: "%s - Wesam Jabali",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  components: true,
  css: ["~/assets/css/main.scss"],

  buildModules: ['@pinia/nuxt'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData:
            '@import "@/assets/css/_mixins.scss"; @import "@/assets/css/_variables.scss";',
        },
      },
    },
  },
});
