import type { Meta, StoryObj } from '@storybook/vue3'

import Spinner from './Spinner.vue'

const meta: Meta<typeof Spinner> = {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof Spinner>

export const Primary: Story = {
  args: {
    size: 'md',
    color: 'primary',
  },
}

export const CustomizeColor: Story = {
  args: {
    size: 'md',
    customize: 'fill-green-500',
  },
}
