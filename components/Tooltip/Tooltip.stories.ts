import type { Meta, StoryObj } from '@storybook/vue3'

import Tooltip from './Tooltip.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <Tooltip class="flex mt-10 justify-center" :placement="args.placement" v-bind="args" :content="args.content">
        <span>hover me</span>
      </Tooltip>`,
  }),
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom', 'top', 'left', 'right'],
    },
  },
  args: {
    placement: 'bottom',
    content: 'Show tip',
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const DefaultTooltip: Story = {
  args: {
    placement: 'bottom',
    content: 'Show tip',
  },
}
