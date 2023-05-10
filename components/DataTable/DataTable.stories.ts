import DataTable from './DataTable.vue'
import DataTableColumn from './DataTableColumn.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof DataTable> = {
  title: 'DataTable',
  component: DataTable,
  render: (args) => ({
    components: { DataTable, DataTableColumn },
    template:
      '<DataTable>' +
      '    <DataTableColumn field="code" header="Code" />\n' +
      '    <DataTableColumn field="name" header="Name" />\n' +
      '    <DataTableColumn field="category" header="Category" />\n' +
      '    <DataTableColumn field="quantity" header="Quantity" />\n' +
      '</DataTable>',
  }),
  args: {
    value: [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        description: 'Product Description',
        image: 'bamboo-watch.jpg',
        price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5,
      },
    ],
    tableStyle: 'min-width: 50rem',
  },
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof DataTable>

export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
}
