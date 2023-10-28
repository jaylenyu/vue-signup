// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  devtools: { enabled: true },
  ssr: false,
  css: ["plain-css", "~/assets/css/common.css"],
  app: {
    head: {
      script: [
        {
          src: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
        },
      ],
    },
  },
});
