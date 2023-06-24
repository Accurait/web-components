import { type DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import {
  createAutoAnimatePlugin,
  createMultiStepPlugin,
  createAutoHeightTextareaPlugin,
} from '@formkit/addons'
import '@formkit/addons/css/multistep'
import { createLazyPlugin } from 'formkit-lazy-plugin'
import { createLoadingPlugin, createHistoryPlugin } from './formkit/plugins'
import theme from './formkit.theme'

export default <DefaultConfigOptions>{
  config: {
    classes: generateClasses(theme),
  },
  icons: {
    ...genesisIcons,
  },
  plugins: [
    createAutoAnimatePlugin(),
    createAutoHeightTextareaPlugin(),
    createMultiStepPlugin(),
    createLazyPlugin(),
    createLoadingPlugin(),
    createHistoryPlugin(),
  ],
}
