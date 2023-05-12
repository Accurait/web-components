import type { Config } from 'tailwindcss'
import TwColors from 'tailwindcss/colors'

const colors = {
  'btn-primary': {
    DEFAULT: TwColors.blue['500'],
    text: 'white',
    ring: TwColors.blue['300'],
  },
  'btn-secondary': {
    DEFAULT: TwColors.gray['500'],
    text: 'white',
    ring: TwColors.gray['300'],
  },
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
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [require('flowbite')],
  darkMode: ['class', '[data-mode="dark"]'],
}
