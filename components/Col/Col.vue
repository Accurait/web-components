<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import {
  type ColVariantProps,
  useColClasses,
} from './composables/useColClasses'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  sm: {
    type: String as PropType<ColVariantProps['sm']>,
    default: 'DEFAULT',
  },
  md: {
    type: String as PropType<ColVariantProps['md']>,
    default: 'DEFAULT',
  },
  xl: {
    type: String as PropType<ColVariantProps['xl']>,
    default: 'DEFAULT',
  },
  '2xl': {
    type: String as PropType<ColVariantProps['2xl']>,
    default: 'DEFAULT',
  },
})

const { class: attrClass, ...attrs } = useAttrs()
const classes = computed(() =>
  twMerge(
    useColClasses({
      sm: props.sm,
      md: props.md,
      xl: props.xl,
      '2xl': props['2xl'],
    }),
    attrs.class as string
  )
)
</script>

<template>
  <div :class="[...classes.split(' ')]" v-bind="attrs">
    <slot />
  </div>
</template>
