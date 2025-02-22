// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Azkar",
      htmlAttrs: {
        lang: "ar",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "project Azkar",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  // إضافة Bootstrap CSS
  css: ["bootstrap/dist/css/bootstrap.min.css", "assets/main.css"],
  compatibilityDate: "2025-02-22",
  devtools: { enabled: true },
});
