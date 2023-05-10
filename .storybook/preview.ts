import { setup } from '@storybook/vue3'
import PrimeVue from 'primevue/config'
import type { Preview } from '@storybook/vue3'

/**
 * Storybook is not able to find the tailwind css file automatically,
 * so we need to import it manually, and it is generated from the tailwind-input.css and content of the tailwind.config.js
 */
import '../assets/css/tailwind-output.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
    className: {
      defaultValue: '',
    },
  },
}

setup((app) => {
  // mock NuxtLink component as storybook cannot import it automatically
  app.component('NuxtLink', {
    props: ['to'],
    template: `<a :href="to"><slot /></a>`,
  })

  app.use(PrimeVue)
})

export default preview
