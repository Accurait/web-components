import {
  createMessage,
  type FormKitNode,
  type FormKitPlugin,
} from '@formkit/core'

declare module '@formkit/core' {
  interface FormKitNodeExtensions {
    context: {
      _resolveLoading: ((value: unknown) => void) | undefined
      _l: number
    }
  }
}

/**
 * The options to be passed to {@link createLoadingPlugin|createLoadingPlugin}
 *
 * @public
 */
export interface LoadingOptions {
  //
}

/**
 * Creates a new lazy plugin.
 *
 * @param LoadingOptions - The options of {@link LoadingOptions|LoadingOptions} to pass to the plugin
 *
 * @returns A {@link @formkit/core#FormKitPlugin|FormKitPlugin}
 *
 * @public
 */
export function createLoadingPlugin(
  LoadingOptions?: LoadingOptions
): FormKitPlugin {
  const loadingPlugin = (node: FormKitNode) => {
    node.extend('disturbLoading', {
      get: (node) => {
        if (node.context!._l <= 0) {
          node.context!.isLoading = true
          node.emit('loading', true, false)
          node.context!.loading = new Promise((resolve) => {
            node.context!._resolveLoading = resolve
          })
        }
        node.context!._l++

        return node
      },
      set: false,
    })

    node.extend('calmLoading', {
      get: (node) => {
        if (node.context!._l > 0) node.context!._l--
        if (node.context!._l === 0) {
          node.context!.isLoading = false
          node.emit('loading', false, false)
          if (node.context!._resolveLoading)
            node.context!._resolveLoading(node.context!.value)
        }
      },
      set: false,
    })

    node.on('created', async () => {
      // We should not change `disabled` if it is being modified externally.
      const autoDisable =
        node.props.disabled === undefined &&
        node.props.submitBehavior !== 'live'

      // Initialize internal counter
      node.context!._l = 0

      node.on('loading', ({ payload }) => {
        if (payload) {
          // Set `disabled` and `loading` states to `true`
          if (autoDisable) node.props.disabled = true
          node.store.set(
            createMessage({
              key: 'loading',
              value: true,
              visible: false,
            })
          )
        } else {
          // Set `disabled` and `loading` states to `false`
          if (autoDisable) node.props.disabled = false
          node.store.remove('loading')
        }
      })
    })
  }

  return loadingPlugin
}
