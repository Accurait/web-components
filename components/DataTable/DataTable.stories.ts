import { faker } from '@faker-js/faker'
import { DataTableSortMeta } from 'primevue/datatable'
import { PropType } from 'vue'
import DataTable from './DataTable.vue'
import DataTableColumn from './DataTableColumn.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

type CompanyDto = {
  id?: string
  parentId?: string | null
  name?: string
  tradingName?: string | null
  businessNumber?: string | null
  taxFileNumber?: string | null
  branch?: string | null
  brands?: string | null
  countryId?: string
  notes?: string | null
  companies?: Array<CompanyDto> | null
  modules?: any
}

const companyFields: Record<keyof CompanyDto, string> = {
  id: 'Id',
  parentId: 'Parent Id',
  name: 'Name',
  tradingName: 'Trading Name',
  businessNumber: 'Business Number',
  taxFileNumber: 'Tax File Number',
  branch: 'Branch',
  brands: 'Brands',
  countryId: 'Country Id',
  notes: 'Notes',
  companies: 'Companies',
  modules: 'Modules',
}

const companies: CompanyDto[] = createFakeCompanyArray(10, 20)

const meta: Meta<typeof DataTable> = {
  title: 'DataTable',
  component: DataTable,
  argTypes: {
    value: {
      description: 'An array of objects to display.',
      control: false,
    },
    dataKey: {
      description:
        'Name of the field that uniquely identifies the a record in the data.',
      control: false,
    },
    striped: {
      description: 'Whether to displays rows with alternating colors.',
      control: 'boolean',
      defaultValue: false,
    },
    scrollable: {
      description:
        'When specified, enables horizontal and/or vertical scrolling.',
      control: 'boolean',
      defaultValue: false,
    },
    rowGroupMode: {
      description: 'Defines the row group mode.',
      control: {
        type: 'select',
        labels: {
          subheader: 'Subheader',
          rowspan: 'RowSpan',
        },
      },
      options: ['subheader', 'rowspan'],
    },
    groupRowsBy: {
      if: { arg: 'rowGroupMode', exists: true },
      description: ' One or more field names to use in row grouping.',
      control: {
        type: 'select',
        labels: companyFields,
      },
      options: Object.keys(companyFields),
    },
    expandableRowGroups: {
      if: { arg: 'rowGroupMode', exists: true },
      description: 'Whether the row groups can be expandable',
      control: 'boolean',
      defaultValue: false,
    },
    sortMode: {
      description:
        'Defines whether sorting works on single column or on multiple columns.',
      control: 'radio',
      options: ['single', 'multiple'],
      defaultValue: 'single',
    },
    sortField: {
      if: { arg: 'sortMode', eq: 'single' },
      description:
        'Property name or a getter function of a row data used for sorting by default',
      control: {
        type: 'select',
        labels: companyFields,
      },
      options: Object.keys(companyFields),
    },
    sortOrder: {
      if: { arg: 'sortField', exists: true },
      description: 'Order to sort the data by default.',
      control: {
        type: 'select',
        labels: {
          '1': 'Ascending',
          '-1': 'Descending',
        },
      },
      options: [1, -1],
    },
    defaultSortOrder: {
      if: { arg: 'sortMode', eq: 'single' },
      description: 'Default sort order of an unsorted column.',
      control: {
        type: 'select',
        labels: {
          '1': 'Ascending',
          '-1': 'Descending',
        },
      },
      options: [1, -1],
      defaultValue: 1,
    },

    multiSortMeta: {
      if: { arg: 'sortMode', eq: 'multiple' },
      description: 'An array of SortMeta objects to sort the data.',
      control: 'object',
    },
    removableSort: {
      description: 'When enabled, columns can have an un-sorted state.',
      control: 'boolean',
      defaultValue: false,
    },
  },
  args: {
    value: companies,
    dataKey: 'id',
    striped: false,
    scrollable: false,
    expandableRowGroups: false,
    sortMode: 'single',
    defaultSortOrder: 1,
    removableSort: false,
  },
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof DataTable>

export const Basic: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      return { args }
    },
    template: `
      <DataTable v-bind="args">
        <DataTableColumn field="name" header="Name" />
        <DataTableColumn field="tradingName" header="Trading name" />
        <DataTableColumn field="notes" header="Notes" />
      </DataTable>
    `,
  }),
  args: {
    //
  },
}

export const Empty: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      return { args }
    },
    template: `
      <DataTable v-bind="args">
        <DataTableColumn field="name" header="Name" />
        <DataTableColumn field="tradingName" header="Trading name" />
        <DataTableColumn field="notes" header="Notes" />
      </DataTable>
    `,
  }),
  args: {
    value: [],
  },
}

export const Scrollable: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      return { args }
    },
    template: `
      <DataTable v-bind="args">
        <DataTableColumn field="name" header="Name" />
        <DataTableColumn field="tradingName" header="Trading name" />
        <DataTableColumn field="notes" header="Notes" />
      </DataTable>
    `,
  }),
  args: {
    scrollable: true,
  },
}

export const Expandable: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      const expandedRows = ref()
      console.log(expandedRows)
      return { args, expandedRows }
    },
    template: `
      <DataTable v-model:expandedRows="expandedRows" v-bind="args">
        <DataTableColumn expander class="w-4 !p-0 !pl-2 m-0" />
        <DataTableColumn field="name" header="Name" />
        <DataTableColumn field="tradingName" header="Trading name" />
        <DataTableColumn field="notes" header="Notes" />

        <template #expansion="slotProps">
          <div class="pl-4">
            <DataTable :value="slotProps.data.companies">
              <DataTableColumn field="name" header="Name" />
              <DataTableColumn field="tradingName" header="Trading name" />
              <DataTableColumn field="notes" header="Notes" />
            </DataTable>
          </div>
        </template>
      </DataTable>
    `,
  }),
  args: {
    //
  },
}

export const RowGroup: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      return { args }
    },
    template: `
      <DataTable v-bind="args">
        <DataTableColumn field="name" header="Name" />
        <DataTableColumn field="tradingName" header="Trading name" />
        <DataTableColumn field="notes" header="Notes" />

        <template #groupheader="slotProps">
          <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.name }}</span>
        </template>
      </DataTable>
    `,
  }),
  args: {
    rowGroupMode: 'subheader',
    groupRowsBy: 'name',
    scrollable: true,
  },
}

export const ExpandableRowGroup: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      const expandedRowGroups = ref()
      return { args, expandedRowGroups }
    },
    template: `
      <DataTable v-model:expandedRowGroups="expandedRowGroups" v-bind="args">
        <DataTableColumn field="name" header="Name" />
        <DataTableColumn field="tradingName" header="Trading name" />
        <DataTableColumn field="notes" header="Notes" />

        <template #groupheader="slotProps">
          <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.name }}</span>
        </template>
      </DataTable>
    `,
  }),
  args: {
    scrollable: true,
    rowGroupMode: 'subheader',
    groupRowsBy: 'name',
    expandableRowGroups: true,
  },
}

export const Sortable: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      return { args }
    },
    template: `
      <DataTable v-bind="args">
        <DataTableColumn field="name" header="Name" sortable />
        <DataTableColumn field="tradingName" header="Trading name" sortable />
        <DataTableColumn field="notes" header="Notes" />
      </DataTable>
    `,
  }),
  args: {
    sortField: 'name',
    sortOrder: 1,
  },
}

export const SortableMultiple: Story = {
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    setup() {
      return { args }
    },
    template: `
      <DataTable v-bind="args">
        <DataTableColumn field="name" header="Name" sortable />
        <DataTableColumn field="tradingName" header="Trading name" sortable />
        <DataTableColumn field="notes" header="Notes" />
      </DataTable>
    `,
  }),
  args: {
    sortMode: 'multiple',
    multiSortMeta: [
      { field: 'name', order: 1 },
      { field: 'tradingName', order: -1 },
    ],
  },
}

/**
 * Creates a fake company.
 *
 * @param parentId - Optional parent ID for nested company objects.
 * @returns A randomly generated company object.
 */
function createFakeCompany(parentId?: string): CompanyDto {
  const id = faker.datatype.uuid()
  return {
    id,
    countryId: faker.address.countryCode(),
    name: faker.company.name(),
    tradingName: faker.company.name(),
    notes: faker.lorem.words(3),
    companies: parentId ? null : createFakeCompanyArray(2, 6, id),
    parentId,
  }
}

/**
 * Creates an array of fake companies.
 *
 * @param min - Minimum number of companies to generate.
 * @param max - Maximum number of companies to generate.
 * @param parentId - Optional parent ID for nested company objects.
 *
 * @returns An array of randomly generated company objects.
 */
function createFakeCompanyArray(
  min: number,
  max: number,
  parentId?: string
): CompanyDto[] {
  const randomArray: CompanyDto[] = []
  const numberOfCompanies = Math.floor(Math.random() * (max - min + 1)) + min

  for (let i = 0; i < numberOfCompanies; i++) {
    randomArray.push(createFakeCompany(parentId))
  }

  return randomArray
}
