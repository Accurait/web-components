import { faker } from '@faker-js/faker'
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

const companies: CompanyDto[] = createFakeCompanyArray(10, 20)

const meta: Meta<typeof DataTable> = {
  title: 'DataTable',
  component: DataTable,
  argTypes: {
    value: { control: 'object' },
    dataKey: { control: 'text' },
    striped: { control: 'boolean' },
    scrollable: { control: 'boolean' },
    expandableRowGroups: { control: 'boolean' },
    rowGroupMode: {
      control: 'select',
      options: ['none', 'subheader', 'rowspan'],
      mapping: {
        none: null,
      },
    },
  },
  args: {
    value: companies,
    dataKey: 'id',
    striped: false,
    scrollable: false,
    expandableRowGroups: false,
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
    dataKey: 'id',
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
    ...Basic.args,
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
    ...Basic.args,
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
    ...Basic.args,
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
    ...Basic.args,
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
    ...Basic.args,
    expandableRowGroups: true,
    rowGroupMode: 'subheader',
    groupRowsBy: 'name',
    scrollable: true,
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
