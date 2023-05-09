<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import {
  type PanelVariantProps,
  usePanelClasses,
} from './composables/usePanelClasses'
import type { PropType } from 'vue'

const props = defineProps({
  size: {
    type: String as PropType<PanelVariantProps['size']>,
    default: 'flexible',
  },
  class: {
    type: String,
    default: '',
  },
})

const classes = computed(() =>
  twMerge(usePanelClasses({ size: props.size }), props.class)
)
</script>

<template>
  <div :class="[...classes.split(' ')]">
    <slot />
  </div>
</template>
