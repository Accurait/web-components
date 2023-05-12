<script setup lang="ts">
import {
  useDisclosureClasses,
  DisclosureVariantProps,
  useButtonClasses,
} from './composables/useDisclosureClasses'
import { twMerge } from 'tailwind-merge'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const props = defineProps({
  buttonContent: {
    type: String,
    default: '',
  },
  buttonClass: {
    type: String,
    default: '',
  },
  class: {
    type: String,
  },
  // unmount the panel when it is closed
  unmount: {
    type: Boolean,
    default: false,
  },
  // keep the panel open by default
  defaultOpen: {
    type: Boolean,
    default: false,
  },
})

const classes = computed(() => twMerge(useDisclosureClasses({}), props.class))
const buttonClasses = computed(() =>
  twMerge(useButtonClasses({}), props.buttonClass)
)
</script>

<template>
  <Disclosure
    as="div"
    v-slot="{ open, close }"
    :class="[...classes.split(' ')]"
    :default-open="props.defaultOpen"
  >
    <!-- Use the `open` state to conditionally change the direction of an icon. -->
    <DisclosureButton :class="[...buttonClasses.split(' ')]">
      <span>{{ props.buttonContent }}</span>
      <slot name="button">
        <svg
          class="ml-2 h-5 w-5"
          :class="open && 'rotate-180 transform'"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </slot>
    </DisclosureButton>
    <DisclosurePanel :unmount="props.unmount">
      <slot :close="close"></slot>
    </DisclosurePanel>
  </Disclosure>
</template>
