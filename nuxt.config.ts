import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
// use import.meta.url to get the current directory path
const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@formkit/nuxt',
    '@morev/vue-transitions/nuxt',
  ],

  components: [
    {
      path: join(currentDir, './components'),
      extensions: ['.vue'],
      pathPrefix: false,
    },
  ],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  build: {
    transpile: ['primevue'],
  },
})
