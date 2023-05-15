<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useRowClasses } from './composables/useRowClasses'

const props = defineProps({
  class: {
    type: String,
    default: undefined,
  },
})
const classes = computed(() => twMerge(useRowClasses({}), props.class))
</script>

<template>
  <div :class="[...classes.split(' ')]" v-bind="$attrs">
    <slot />
  </div>
</template>
