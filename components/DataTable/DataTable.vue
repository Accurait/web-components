<script setup lang="ts">
import DataTable, { type DataTableSortMeta } from 'primevue/datatable'
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
  scrollable: {
    type: Boolean,
    default: false,
  },
  expandableRowGroups: {
    type: Boolean,
    default: false,
  },
  rowGroupMode: {
    type: String as PropType<'subheader' | 'rowspan'>,
    default: null,
  },
  groupRowsBy: {
    type: [Array, String, Function],
    default: null,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  sortField: {
    type: [String, Function] as PropType<string | ((item: any) => string)>,
    default: null,
  },
  sortOrder: {
    type: Number,
    default: null,
  },
  defaultSortOrder: {
    type: Number,
    default: 1,
  },
  multiSortMeta: {
    type: Array as PropType<DataTableSortMeta[]>,
    default: null,
  },
  sortMode: {
    type: String as PropType<'single' | 'multiple'>,
    default: 'single',
  },
  removableSort: {
    type: Boolean,
    default: false,
  },
})

// TODO: Calculate child cell width by getting the parent cell
</script>

<template>
  <DataTable
    ref="datatable"
    :value="value"
    :data-key="dataKey"
    :scrollable="scrollable"
    :expandable-row-groups="expandableRowGroups"
    :row-group-mode="rowGroupMode"
    :group-rows-by="groupRowsBy"
    :striped-rows="striped"
    :sort-field="sortField"
    :sort-order="sortOrder"
    :default-sort-order="defaultSortOrder"
    :multi-sort-meta="multiSortMeta"
    :sort-mode="sortMode"
    :removable-sort="removableSort"
  >
    <!-- Header -->
    <template v-if="$slots.header" #header="slotProps">
      <slot name="header" v-bind="slotProps" />
    </template>

    <!-- Default -->
    <slot />

    <!-- Group  -->
    <template v-if="$slots.groupheader" #groupheader="slotProps">
      <slot name="groupheader" v-bind="slotProps" />
    </template>
    <template v-if="$slots.groupfooter" #groupfooter="slotProps">
      <slot name="groupfooter" v-bind="slotProps" />
    </template>

    <!-- Expansion  -->
    <template v-if="$slots.expansion" #expansion="slotProps">
      <slot name="expansion" v-bind="slotProps" />
    </template>

    <!-- Footer -->
    <template v-if="$slots.footer" #footer="slotProps">
      <slot name="footer" v-bind="slotProps" />
    </template>

    <!-- Loading state -->
    <template v-if="$slots.loading" #loading="slotProps">
      <slot name="loading" v-bind="slotProps" />
    </template>

    <!-- Empty state -->
    <template v-if="$slots.empty" #empty="slotProps">
      <slot name="empty" v-bind="slotProps" />
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
  @apply bg-primary-50 text-primary-900 ml-2 h-[1.143rem] min-w-[1.143rem] rounded-[50%] leading-[1.143rem];
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
  @apply text-primary hover:text-primary bg-zinc-50;
}
.p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
  @apply text-primary;
}
.p-datatable .p-sortable-column.p-highlight:hover {
  @apply bg-zinc-100;
}
.p-datatable .p-sortable-column.p-highlight:hover .p-sortable-column-icon {
  @apply text-primary;
}
.p-datatable .p-sortable-column:focus {
  @apply shadow-[inset_0_0_0_0.15rem_#cccccc] outline-0;
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
  @apply shadow-[0_0_0_1px_#cccccc] outline-0 outline-offset-0;
}
.p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
  @apply mr-2;
}
.p-datatable .p-datatable-tbody > tr > td > .p-column-title {
  @apply font-medium;
}
.p-datatable .p-datatable-tbody > tr:focus {
  @apply outline-none outline-0;
}
.p-datatable .p-datatable-tbody > tr.p-highlight {
  @apply bg-primary-50 text-primary-900;
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
  @apply bg-primary;
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
  @apply bg-primary-50 text-primary-900;
}
.p-datatable.p-datatable-striped
  .p-datatable-tbody
  > tr:nth-child(even).p-highlight
  .p-row-toggler {
  @apply text-primary-900;
}
.p-datatable.p-datatable-striped
  .p-datatable-tbody
  > tr:nth-child(even).p-highlight
  .p-row-toggler:hover {
  @apply text-primary-900;
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

/* Scrollable */
.p-datatable-scrollable > .p-datatable-wrapper {
  overflow: inherit;
}
/* TODO: Add support to sticky for expandable rows. Need to calculate the top by getting the table thead */
/*.p-datatable.p-datatable-scrollable*/
/*  > .p-datatable-wrapper*/
/*  > .p-datatable-table*/
/*  > .p-datatable-tbody*/
/*  > tr:not(.p-datatable-row-expansion) {*/
/*  position: sticky;*/
/*  top: 46px;*/
/*  z-index: 1;*/
/* }*/
</style>
