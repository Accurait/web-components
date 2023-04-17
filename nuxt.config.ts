// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // nuxt.config.{js,ts}
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})
