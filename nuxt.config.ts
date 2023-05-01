import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// https://nuxt.com/docs/guide/going-further/layers#relative-paths-and-aliases
// use import.meta.url to get the current directory path
const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // nuxt.config.{js,ts}
  modules: ['@nuxtjs/tailwindcss'],
  components: [
    {
      path: join(currentDir, './components'),
      extensions: ['.vue'],
      pathPrefix: false
    }
  ]
})
