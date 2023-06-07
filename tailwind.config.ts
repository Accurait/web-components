import type { Config } from 'tailwindcss'
import { blue, gray, green } from 'tailwindcss/colors'

const colors = {
  'btn-primary': {
    DEFAULT: blue['500'],
    text: 'white',
    ring: blue['300'],
  },
  'btn-secondary': {
    DEFAULT: gray['500'],
    text: 'white',
    ring: gray['300'],
  },
  primary: blue,
  secondary: green,
}

export default <Config>{
  content: [
    './components/**/*.{js,vue,ts,mdx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './node_modules/flowbite.{js,ts}',
    './stories/**/*.{js,vue,ts,mdx}',
    './formkit.config.ts',
    './formkit.theme.ts',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [require('flowbite'), require('@formkit/themes/tailwindcss')],
  darkMode: ['class', '[data-mode="dark"]'],
}
