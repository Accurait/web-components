<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { useRowClasses } from './composables/useRowClasses'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({})

const { attrClass, attrRest } = useReactiveAttr()
const classes = computed(() =>
  twMerge(useRowClasses({}), attrClass.value)
)
</script>

<template>
  <div :class="[...classes.split(' ')]" v-bind="attrRest">
    <slot />
  </div>
</template>
