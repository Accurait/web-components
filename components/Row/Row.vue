<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useRowClasses } from './composables/useRowClasses'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({})

const { class: attrClass, ...attrs } = useAttrs()
const classes = computed(() =>
  twMerge(useRowClasses({}), attrClass as string)
)
</script>

<template>
  <div :class="[...classes.split(' ')]" v-bind="attrs">
    <slot />
  </div>
</template>
