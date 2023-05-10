<script setup lang="ts">
import DataTable from 'primevue/datatable'
import type { PropType } from 'vue'

defineProps({
  value: {
    type: Array as PropType<Record<string, unknown>[]>,
    default: null,
  },
  dataKey: {
    type: [String, Function],
    default: null,
  },
})
</script>

<template>
  <DataTable :value="value" :data-key="dataKey">
    <!-- Header -->
    <template v-if="$slots.header" #header="slotProps">
      <slot name="header" v-bind="slotProps" />
    </template>

    <!-- Default -->
    <slot />

    <!-- Empty -->
    <template v-if="$slots.empty" #empty="slotProps">
      <slot name="empty" v-bind="slotProps" />
    </template>

    <!-- Loading -->
    <template v-if="$slots.loading" #loading="slotProps">
      <slot name="loading" v-bind="slotProps" />
    </template>

    <!-- Footer -->
    <template v-if="$slots.footer" #footer="slotProps">
      <slot name="footer" v-bind="slotProps" />
    </template>
  </DataTable>
</template>

<style lang="postcss">
.p-component,
.p-component * {
  @apply box-border;
}

.p-datatable .p-paginator-top {
  @apply rounded-none border-b;
}
.p-datatable .p-paginator-bottom {
  @apply rounded-none border-b;
}
.p-datatable .p-datatable-header {
  @apply border-y border-solid border-zinc-100 bg-zinc-50 p-5 font-semibold text-zinc-700;
}
.p-datatable .p-datatable-footer {
  @apply border-b border-solid border-zinc-100 bg-zinc-50 px-6 py-3 font-semibold text-zinc-700;
}
.p-datatable .p-datatable-thead > tr > th {
  @apply border-b border-solid border-zinc-100 bg-zinc-50 px-6 py-3 text-left font-medium text-gray-500 transition-none;
}
.p-datatable .p-datatable-tfoot > tr > td {
  @apply border-b border-solid border-zinc-100 bg-zinc-50 p-4 text-left font-semibold text-zinc-700;
}
.p-datatable .p-sortable-column .p-sortable-column-icon {
  @apply ml-2 text-zinc-500;
}
.p-datatable .p-sortable-column .p-sortable-column-badge {
  @apply ml-2 h-[1.143rem] min-w-[1.143rem] rounded-[50%] bg-indigo-50 leading-[1.143rem] text-indigo-900;
}
.p-datatable .p-sortable-column:not(.p-highlight):hover {
  @apply bg-zinc-100 text-zinc-700;
}
.p-datatable
  .p-sortable-column:not(.p-highlight):hover
  .p-sortable-column-icon {
  @apply text-zinc-500;
}
.p-datatable .p-sortable-column.p-highlight {
  @apply bg-zinc-50 text-indigo-600 hover:text-indigo-600;
}
.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
  @apply text-indigo-600;
}
.p-datatable .p-sortable-column.p-highlight:hover {
  @apply bg-zinc-100;
}
.p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon {
  @apply text-indigo-600;
}
.p-datatable .p-sortable-column:focus {
  @apply shadow-[inset_0_0_0_0.15rem_#6366f1] outline-0;
}
.p-datatable .p-datatable-tbody > tr {
  @apply bg-white text-zinc-700 transition-none focus:outline-offset-[-0.15rem];
}
.p-datatable .p-datatable-tbody > tr > td {
  @apply border-b border-solid border-zinc-100 px-6 py-4 text-left;
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
  @apply h-8 w-8 rounded-[50%] border-0 border-none bg-transparent text-zinc-500 transition-none;
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
  @apply border-transparent bg-zinc-100 text-zinc-900;
}
.p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus,
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus {
  @apply shadow-[0_0_0_1px_#6366f1] outline-0 outline-offset-0;
}
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
  @apply mr-2;
}
.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
  @apply font-medium;
}
.p-datatable .p-datatable-tbody > tr:focus {
  @apply outline outline-2 outline-indigo-500;
}
.p-datatable .p-datatable-tbody > tr.p-highlight {
  @apply bg-indigo-50 text-indigo-900;
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
  @apply shadow-[inset_0_2px_0_0_#4f46e5] shadow-[inset_0_2px_0_0_#eef2ff];
}
.p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
  @apply shadow-[inset_0_-2px_0_0_#4f46e5] shadow-[inset_0_-2px_0_0_#eef2ff];
}
.p-datatable.p-datatable-hoverable-rows
  .p-datatable-tbody
  > tr:not(.p-highlight):hover {
  @apply bg-zinc-100 text-zinc-700;
}
.p-datatable .p-column-resizer-helper {
  @apply bg-indigo-600;
}
.p-datatable .p-datatable-scrollable-header,
.p-datatable .p-datatable-scrollable-footer {
  @apply bg-zinc-50;
}
.p-datatable.p-datatable-scrollable
  > .p-datatable-wrapper
  > .p-datatable-table
  > .p-datatable-thead,
.p-datatable.p-datatable-scrollable
  > .p-datatable-wrapper
  > .p-datatable-table
  > .p-datatable-tfoot,
.p-datatable.p-datatable-scrollable
  > .p-datatable-wrapper
  > .p-virtualscroller
  > .p-datatable-table
  > .p-datatable-thead,
.p-datatable.p-datatable-scrollable
  > .p-datatable-wrapper
  > .p-virtualscroller
  > .p-datatable-table
  > .p-datatable-tfoot {
  @apply bg-neutral-50;
}
.p-datatable .p-datatable-loading-icon {
  @apply text-[2rem];
}
.p-datatable .p-datatable-loading-icon.p-icon {
  @apply h-8 w-8;
}
.p-datatable.p-datatable-gridlines .p-datatable-header {
  @apply border border-b-0;
}
.p-datatable.p-datatable-gridlines .p-datatable-footer {
  @apply border border-t-0;
}
.p-datatable.p-datatable-gridlines .p-paginator-top {
  @apply border-x;
}
.p-datatable.p-datatable-gridlines .p-paginator-bottom {
  @apply border border-t-0;
}
.p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
  @apply border border-r-0 last:border;
}
.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
  @apply border border-r-0 last:border last:border-b-0;
}
.p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
  @apply border border-r-0 last:border;
}
.p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
  @apply border border-r-0 last:border;
}
.p-datatable.p-datatable-gridlines
  .p-datatable-thead
  + .p-datatable-tfoot
  > tr
  > td {
  @apply border-b border-l;
}
.p-datatable.p-datatable-gridlines
  .p-datatable-thead
  + .p-datatable-tfoot
  > tr
  > td:last-child {
  @apply border border-t-0;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(
    .p-datatable-tbody
  )
  .p-datatable-tbody
  > tr
  > td {
  @apply border-b border-l;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(
    .p-datatable-tbody
  )
  .p-datatable-tbody
  > tr
  > td:last-child {
  @apply border border-t-0;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(
    .p-datatable-tfoot
  )
  .p-datatable-tbody
  > tr:last-child
  > td {
  @apply border-l;
}
.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(
    .p-datatable-tfoot
  )
  .p-datatable-tbody
  > tr:last-child
  > td:last-child {
  @apply border-x;
}
.p-datatable.p-datatable-striped .p-datatable-tbody > tr:nth-child(even) {
  @apply bg-gray-50;
}
.p-datatable.p-datatable-striped
  .p-datatable-tbody
  > tr:nth-child(even).p-highlight {
  @apply bg-indigo-50 text-indigo-900;
}
.p-datatable.p-datatable-striped
  .p-datatable-tbody
  > tr:nth-child(even).p-highlight
  .p-row-toggler {
  @apply text-indigo-900;
}
.p-datatable.p-datatable-striped
  .p-datatable-tbody
  > tr:nth-child(even).p-highlight
  .p-row-toggler:hover {
  @apply text-indigo-900;
}
.p-datatable.p-datatable-sm .p-datatable-header {
  @apply p-2.5;
}
.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
  @apply px-3 py-1.5;
}
.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
  @apply px-3 py-2;
}
.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
  @apply px-3 py-1.5;
}
.p-datatable.p-datatable-sm .p-datatable-footer {
  @apply px-3 py-1.5;
}
.p-datatable.p-datatable-lg .p-datatable-header {
  @apply p-[1.5625rem];
}
.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
  @apply px-[1.875rem] py-[0.9375rem];
}
.p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
  @apply px-[1.875rem] py-5;
}
.p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
  @apply px-[1.875rem] py-[0.9375rem];
}
.p-datatable.p-datatable-lg .p-datatable-footer {
  @apply px-[1.875rem] py-[0.9375rem];
}
</style>
