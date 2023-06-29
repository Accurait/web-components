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
  'dark-gray': '#32353E',
  'med-gray': '#8C8F94',
  'light-gray': '#E8E9EA',
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
  safelist: ['after:animate-wave', 'after:animate-pulse'],
  plugins: [require('flowbite'), require('@formkit/themes/tailwindcss')],
  darkMode: ['class', '[data-mode="dark"]'],
}
