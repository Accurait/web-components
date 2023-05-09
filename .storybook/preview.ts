import type { Preview } from '@storybook/vue3'

/** Storybook is not able to find the tailwind css file automatically,
    so we need to import it manually, and it is generated from the tailwind-input.css and content of the tailwind.config.js
*/
import '../assets/css/tailwind-output.css'
// import { action } from '@storybook/addon-actions'
import { setup } from '@storybook/vue3'

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

// mock NuxtLink component as storybook cannot import it automatically
setup((app) => {
  app.component('NuxtLink', {
    props: ['to'],
    template: `<a :href="to"><slot /></a>`,
  })
})

export default preview
