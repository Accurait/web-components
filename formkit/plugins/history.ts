import { type FormKitNode, type FormKitPlugin } from '@formkit/core'
import { reactive } from 'vue'
declare module '@formkit/core' {
  interface FormKitNodeExtensions {
    undo: () => Promise<void>
    redo: () => Promise<void>
    clearHistory: () => void
    canUndo: boolean
    canRedo: boolean
  }

  interface FormKitFrameworkContext {
    history: History
  }
}

export interface History {
  history: unknown[]
  currentIndex: number
  inProgress: boolean
}

/**
 * The options to be passed to {@link createHistoryPlugin|createHistoryPlugin}
 *
 * @public
 */
export interface HistoryOptions {
  delay?: number
}

/**
 * Creates a new History plugin.
 *
 * @param HistoryOptions - The options of {@link HistoryOptions|HistoryOptions} to pass to the plugin
 *
 * @returns A {@link @formkit/core#FormKitPlugin|FormKitPlugin}
 *
 * @public
 */
export function createHistoryPlugin(
  HistoryOptions?: HistoryOptions
): FormKitPlugin {
  const historyPlugin = (node: FormKitNode) => {
    node.on('created', () => {
      const history = (node.context.history = reactive<History>({
        history: [node._value],
        currentIndex: 0,
        inProgress: false,
      }))

      const { delay = 300 } = HistoryOptions ?? {}

      const saveToHistory = debounce((value: unknown) => {
        history.history = history.history.slice(0, history.currentIndex + 1)
        history.history.push(value)
        history.currentIndex++
      }, delay)

      node.hook.input((payload, next) => {
        if (!history.inProgress && payload !== node._value) {
          saveToHistory(payload)
        }
        return next(payload)
      })

      node.extend('canUndo', {
        get: () => {
          return history.currentIndex > 0
        },
        set: false,
      })

      node.extend('canRedo', {
        get: () => {
          return history.currentIndex < history.history.length - 1
        },
        set: false,
      })

      node.extend('undo', {
        get: (node) => async () => {
          if (node.canUndo) {
            const previousValue = node._value
            const value = history.history[history.currentIndex]
            history.inProgress = true
            history.currentIndex--
            await node.input(value)
            history.inProgress = false
            node.emit('history:undo', { previousValue, value })
          }
        },
        set: false,
      })

      node.extend('redo', {
        get: (node) => async () => {
          if (node.canRedo) {
            const previousValue = node._value
            const value = history.history[history.currentIndex]
            history.inProgress = true
            history.currentIndex++
            await node.input(value)
            history.inProgress = false
            node.emit('history:redo', { previousValue, value })
          }
        },
        set: false,
      })

      node.extend('clearHistory', {
        get: (node) => () => {
          history.history = [node._value]
          history.currentIndex = 0
          node.emit('history:clear')
        },
        set: false,
      })

      node.on('reset', async () => {
        await node.settled
        node.clearHistory()
      })

      node.emit('history:created', node)
    })
  }

  return historyPlugin
}

function debounce(func: Function, delay: number): Function {
  let timerId: NodeJS.Timeout

  return function (this: any, ...args: any[]) {
    if (timerId) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
