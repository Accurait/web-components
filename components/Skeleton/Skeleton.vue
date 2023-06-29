<script lang="ts" setup>
import { PropType, toRefs } from 'vue'

import { useSkeletonClasses } from './composables/useSkeletonClasses'
import {
  SkeletonAnimation,
  SkeletonBorderRadius,
  SkeletonHeight,
  SkeletonShape,
  SkeletonSize,
  SkeletonWidth,
} from './types'

const props = defineProps({
  shape: {
    type: String as PropType<SkeletonShape>,
    default: 'rectangle',
    validator: (value: string) => ['rectangle', 'circle'].includes(value),
  },
  size: {
    type: [String, Number] as PropType<SkeletonSize>,
    default: null,
  },
  width: {
    type: [String, Number] as PropType<SkeletonWidth>,
    default: null,
  },
  height: {
    type: [String, Number] as PropType<SkeletonHeight>,
    default: null,
  },
  borderRadius: {
    type: String as PropType<SkeletonBorderRadius>,
    default: null,
  },
  animation: {
    type: String as PropType<SkeletonAnimation>,
    default: 'wave',
    validator: (value: string) => ['wave', 'pulse', 'none'].includes(value),
  },
})

const { containerClass, containerStyle } = useSkeletonClasses(toRefs(props))
</script>

<template>
  <div :style="containerStyle" :class="containerClass" />
</template>
