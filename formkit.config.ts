import { type DefaultConfigOptions } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import { createMultiStepPlugin } from '@formkit/addons'
import '@formkit/addons/css/multistep'
import { createLazyPlugin, createLoadingPlugin } from './formkit/plugins'
import theme from './formkit.theme'

export default <DefaultConfigOptions>{
  config: {
    classes: generateClasses(theme),
  },
  icons: {
    ...genesisIcons,
  },
  plugins: [createMultiStepPlugin(), createLazyPlugin(), createLoadingPlugin()],
}
