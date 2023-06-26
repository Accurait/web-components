<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import {
  type ButtonVariantProps,
  useButtonClasses,
} from './composables/useButtonClasses'
import type { PropType } from 'vue'

// turn off inheritAttrs as we want to merge local tailwind classes with the class attribute manually
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  size: {
    type: String as PropType<ButtonVariantProps['size']>,
    default: 'text-base',
  },
  color: {
    type: String as PropType<ButtonVariantProps['color']>,
    default: undefined,
  },
  shape: {
    type: String as PropType<ButtonVariantProps['shape']>,
    default: undefined,
  },
  ring: {
    type: Boolean as PropType<ButtonVariantProps['ring']>,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const { class: attrClass, ...attrs } = useAttrs()
const disabled = computed(() => props.disabled || props.loading)

const classes = computed(() =>
  twMerge(
    useButtonClasses({
      color: props.color,
      ring: props.ring,
      size: props.size,
      shape: props.shape,
    }),
    attrClass as string
  )
)
</script>

<template>
  <button
    v-if="!props.to"
    type="button"
    role="button"
    :class="[...classes.split(' ')]"
    v-bind="attrs"
    :disabled="disabled"
  >
    <Spinner v-if="loading" size="xs" />
    <slot />
  </button>
  <NuxtLink
    v-if="props.to"
    :to="props.to"
    :class="[...classes.split(' ')]"
    role="link"
    v-bind="attrs"
  >
    <slot />
  </NuxtLink>
</template>
