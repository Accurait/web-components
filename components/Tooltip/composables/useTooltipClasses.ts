// import { cva, type VariantProps } from 'class-variance-authority'
// export type TooltipVariantProps = VariantProps<typeof useTooltipClasses>
// export const useTooltipClasses = cva(['focus:ring-4'], {
//   variants: {
//     color: {
//       primary: ['bg-btn-primary text-btn-primary-text'],
//     },
//   },

//   defaultVariants: {
//     color: 'primary',
//   },
// })

import { computed, nextTick, ref, watch } from 'vue'
import type { Ref } from 'vue'
import classNames from 'classnames'
import type { TooltipPlacement } from '../types'

const defaultTooltipClasses =
  'absolute z-10 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700'

const defaultGapInPx = 8

const placementTooltipClasses: Record<TooltipPlacement, string> = {
  bottom: '',
  left: 'top-0',
  right: 'top-0',
  top: '',
}

export type UseTooltipClassesProps = {
  placement: Ref<TooltipPlacement>
  contentRef: Ref<HTMLDivElement | undefined>
  visible: Ref<boolean>
}

const placementCalculators: Record<
  TooltipPlacement,
  (rect: DOMRect) => string
> = {
  bottom(rect: DOMRect): string {
    return `bottom: -${rect.height + defaultGapInPx}px;`
  },
  left(rect: DOMRect): string {
    return `left: -${rect.width + defaultGapInPx}px;`
  },
  right(rect: DOMRect): string {
    return `right: -${rect.width + defaultGapInPx}px;`
  },
  top(rect: DOMRect): string {
    return `top: -${rect.height + defaultGapInPx}px;`
  },
}

export function useTooltipClasses(props: UseTooltipClassesProps): {
  contentClasses: Ref<string>
  contentStyles: Ref<string>
} {
  watch(props.visible, (value: boolean) => {
    if (value) nextTick(() => calculatePlacementClasses())
  })

  const placementStyles = ref('')

  const calculatePlacementClasses = () => {
    const boundingRect = props.contentRef.value?.getBoundingClientRect()
    if (!boundingRect) return (placementStyles.value = '')
    placementStyles.value =
      placementCalculators[props.placement.value](boundingRect)
  }

  const contentClasses = computed(() => {
    return classNames(
      defaultTooltipClasses,
      placementTooltipClasses[props.placement.value]
    )
  })

  return {
    contentClasses,
    contentStyles: placementStyles,
  }
}
