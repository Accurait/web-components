import { setup, type Preview } from '@storybook/vue3'
import { withThemeByDataAttribute } from '@storybook/addon-styling'
import PrimeVue from 'primevue/config'

/**
 * Storybook is not able to find the tailwind css file automatically, so we need to import it manually
 */
import '../assets/css/tailwind.css'

// mock NuxtLink component as storybook cannot import it automatically
setup((app) => {
  app.component('NuxtLink', {
    props: ['to'],
    template: `<a :href="to"><slot /></a>`,
  })
  app.use(PrimeVue)
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
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

export default preview

/* tailwind light and dark theme switcher */
export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
]
