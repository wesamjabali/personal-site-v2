import { Vue3Mq } from "vue3-mq";
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Vue3Mq, { breakpoints: { xs: 0, s: 481, m: 769, l: 1025, xl: 1201 } })
})

// 320px — 480px: Mobile devices
// 481px — 768px: iPads, Tablets
// 769px — 1024px: Small screens, laptops
// 1025px — 1200px: Desktops, large screens
// 1201px and more —  Extra large screens, TV