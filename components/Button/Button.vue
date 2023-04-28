<template>
  <button v-if="!props.to" type="button" :class="[...classes.split(' ')]">
    <Spinner v-if="loading" />
    <slot />
  </button>
  <NuxtLink v-else :to="props.to" :class="[...classes.split(' ')]">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed, ref } from 'vue'
import { ButtonVariantProps, useButtonClasses } from './composables/useButtonClasses'
import Spinner from '../Spinner/Spinner.vue'

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
  loading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String
  }
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
