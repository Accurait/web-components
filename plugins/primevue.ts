// import PrimeVue from 'primevue/config'
// import PrimeVue from '~/config/primevue
import PrimeVueConfig from '~/config/primevue/config'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVueConfig)
})
