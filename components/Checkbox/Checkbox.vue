<template>
  <div class="flex items-center mb-4">
    <input :id="id" type="checkbox" value="" :class="checkboxClasses" />
    <label :for="id" :class="labelClasses">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
import { PropType, computed } from 'vue'
import { twMerge } from 'tailwind-merge'
import { nanoid } from 'nanoid'
import {
  useCheckboxClasses,
  useCheckboxLabelClasses,
  CheckboxVariantProps,
  CheckboxLabelVariantProps,
} from './composables/useCheckboxClasses'

// create UID for checkbox
const id = nanoid()

const props = defineProps({
  checkboxCustomize: {
    type: String,
  },
  labelCustomize: {
    type: String,
  },
})

const checkboxClasses = computed(() => twMerge(useCheckboxClasses(), props.checkboxCustomize))

const labelClasses = computed(() => twMerge(useCheckboxLabelClasses(), props.labelCustomize))
</script>

<style scoped></style>
