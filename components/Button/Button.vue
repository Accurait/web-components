<template>
  <button type="button" :class="[...classes.split(' ')]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue'
import { ButtonVariantProps, useButtonClasses } from './composables/useButtonClasses';

const props = defineProps({
  size: {
    type: String as PropType<ButtonVariantProps['size']>,
  },
  color: {
    type: String as PropType<ButtonVariantProps['color']>,
  },
  shape: {
    type: String as PropType<ButtonVariantProps['shape']>,
  },
  customize: {
    type: String,
  },
})

const classes = computed(() =>
  twMerge(
    useButtonClasses({
      size: props.size,
      color: props.color,
      shape: props.shape,
    }),
    props.customize
  )
)
</script>
