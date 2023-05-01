<template>
  <div class="flex items-center mb-4">
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
  modelValue: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String
  }
})

const checkboxClasses = computed(() => twMerge(useCheckboxClasses(), props.checkboxCustomize))
const labelClasses = computed(() => twMerge(useCheckboxLabelClasses(), props.labelCustomize))

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).checked)
}
</script>

<style scoped></style>