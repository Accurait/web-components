import type { Config } from 'tailwindcss'

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
  theme: {},
  plugins: [require('flowbite'), require('@headlessui/tailwindcss')],
  darkMode: ['class', '[data-mode="dark"]'],
}
