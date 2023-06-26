<script lang="ts" setup>
import {
  arrow,
  computePosition,
  flip,
  offset,
  shift,
  Placement,
} from '@floating-ui/dom'
import { useTooltipClasses } from './composables/useTooltipClasses'
import { twMerge } from 'tailwind-merge'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom',
  },
  outerClass: {
    type: String,
    default: undefined,
  },
})

const { class: attrClass, ...attrs } = useAttrs() as { class: string }

const referenceRef = ref()
const floatingRef = ref()
const arrowRef = ref()
const isHidden = ref(true)

async function calculatePosition() {
  const { x, y, middlewareData, placement } = await computePosition(
    referenceRef.value,
    floatingRef.value,
    {
      placement: props.placement,
      middleware: [
        offset(8),
        flip(),
        shift({ padding: 16 }),
        arrow({ element: arrowRef.value }),
      ],
    }
  )

  Object.assign(floatingRef.value.style, {
    left: `${x}px`,
    top: `${y}px`,
  })

  const { x: arrowX, y: arrowY } = middlewareData.arrow

  const opposedSide = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom',
  }[placement.split('-')[0]]

  Object.assign(arrowRef.value.style, {
    left: arrowX ? `${arrowX}px` : '',
    top: arrowY ? `${arrowY}px` : '',
    bottom: '',
    right: '',
    [opposedSide!]: '-4px',
  })
}

function hide() {
  isHidden.value = true
}

function show() {
  isHidden.value = false
  calculatePosition()
}

const tooltipClasses = computed(() =>
  twMerge(
    useTooltipClasses(),
    attrClass as string,
    isHidden.value ? 'hidden' : ''
  )
)

const outerClasses = computed(() => twMerge('inline-block', props.outerClass))

const arrorClasses = computed(() => {
  //check if there is bg color on classes props and use it on arrow too
  function extractWordsWithPrefix(prefix: string): string[] {
    const regex = new RegExp(`\\b${prefix}[^\\s]+\\b`, 'g')
    const matches = attrClass.match(regex) || []
    return matches
  }
  const prefixes = ['bg-', '!bg-', 'dark:bg-', 'dark:!bg-']

  return twMerge(
    'absolute h-[8px] w-[8px] rotate-45 bg-gray-800 z-[-1]',
    prefixes.flatMap((prefix) => extractWordsWithPrefix(prefix))
  )
})
</script>

<template>
  <div
    ref="referenceRef"
    :class="[...outerClasses.split(' ')]"
    v-bind="attrs"
    @blur="hide"
    @focus="show"
    @mouseenter="show"
    @mouseleave="hide"
  >
    <slot />
  </div>
  <div ref="floatingRef" :class="[...tooltipClasses.split(' ')]">
    {{ props.content }}
    <div ref="arrowRef" :class="[...arrorClasses.split(' ')]"></div>
  </div>
</template>
