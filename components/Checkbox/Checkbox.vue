<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { nanoid } from 'nanoid'
import {
  useCheckboxClasses,
  useCheckboxLabelClasses,
} from './composables/useCheckboxClasses'

// create UID for checkbox
const id = nanoid()

const props = defineProps({
  boxClass: {
    type: String,
    default: undefined,
  },
  labelClass: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: undefined,
  },
})

const checkboxClasses = computed(() =>
  twMerge(useCheckboxClasses(), props.boxClass)
)
const labelClasses = computed(() =>
  twMerge(useCheckboxLabelClasses(), props.labelClass)
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

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

<style scoped></style>
