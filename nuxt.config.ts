import { defineNuxtConfig } from "nuxt";
import { BaseLink } from "./.nuxt/components";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Wesam Jabali",
      titleTemplate: "%s - Wesam",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  components: true,
  css: ["~/assets/css/main.scss"],
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
    markdown: { tags: { a: 'BaseLink' } },
    highlight: { theme: 'dracula' }
  },
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
