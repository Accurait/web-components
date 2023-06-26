<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import {
  type PanelVariantProps,
  usePanelClasses,
} from './composables/usePanelClasses'
import type { PropType } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  size: {
    type: String as PropType<PanelVariantProps['size']>,
    default: 'flexible',
  }
})

const { class: attrClass, ...attrs } = useAttrs()
const classes = computed(() =>
  twMerge(usePanelClasses({ size: props.size }), attrClass as string)
)
</script>

<template>
  <div :class="[...classes.split(' ')]" v-bind="attrs">
    <slot />
  </div>
</template>
