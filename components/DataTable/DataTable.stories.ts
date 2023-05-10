import DataTable from './DataTable.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta<typeof DataTable> = {
  title: 'DataTable',
  component: DataTable,
  render: (args) => ({
    components: { DataTable },
    template: '<DataTable v-bind="args"></DataTable>',
  }),
  args: {
    //
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
