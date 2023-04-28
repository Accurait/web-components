import type { Meta, StoryObj } from '@storybook/vue3'

import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  render: (args) => ({
    components: { Checkbox },
    setup() {
      return { args }
    },
    template: '<Checkbox v-bind="args">{{args.content}}</Checkbox>',
  }),
  argTypes: {},
  args: {
    content: 'default checkbox content',
  },
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof Checkbox>

export const Primary: Story = {
  args: {},
}

export const Customize: Story = {
  args: {
    checkboxCustomize: 'w-6 h-6 accent-green-600',
    labelCustomize: 'text-lg'
  },
}
