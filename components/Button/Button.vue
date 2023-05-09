<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import {
  type ButtonVariantProps,
  useButtonClasses,
} from './composables/useButtonClasses'
import type { PropType } from 'vue'

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
  class: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const disabled = computed(() => props.disabled || props.loading)

const classes = computed(() =>
  twMerge(
    useButtonClasses({
      size: props.size,
      color: props.color,
      shape: props.shape,
    }),
    props.class
  )
)
</script>

<template>
  <button
    v-if="!props.to"
    type="button"
    :class="[...classes.split(' ')]"
    v-bind="$attrs"
    :disabled="disabled"
  >
    <Spinner v-if="loading" size="xs" />
    <slot />
  </button>
  <NuxtLink
    v-if="props.to"
    :to="props.to"
    :class="[...classes.split(' ')]"
    v-bind="$attrs"
  >
    <slot />
  </NuxtLink>
</template>
