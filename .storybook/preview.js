/** @type { import('@storybook/vue3').Preview } */

/** Storybook is not able to find the tailwind css file automatically
    so we need to import it manually and it is generated from the tailwind-input.css and conten of the tailwind.config.js
*/
import '../assets/css/tailwind-output.css'

const preview = {
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
      defaultValue: false
    }
  }
}

export default preview
