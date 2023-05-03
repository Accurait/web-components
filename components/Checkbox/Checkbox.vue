<script setup lang="ts">
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
  boxClass: {
    type: String,
  },
  labelClass: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
  },
})

const checkboxClasses = computed(() => twMerge(useCheckboxClasses(), props.boxClass))
const labelClasses = computed(() => twMerge(useCheckboxLabelClasses(), props.labelClass))

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<style scoped></style>

<template>
  <div class="flex items-center justify-center">
    <input
      :id="id"
      v-bind="$attrs"
      type="checkbox"
      :class="checkboxClasses"
      :value="value"
      :checked="modelValue"
      @input="updateValue"
    />
    <label :for="id" :class="labelClasses">
      <slot />
    </label>
  </div>
</template>
