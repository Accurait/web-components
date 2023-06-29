import type { Meta, StoryObj } from '@storybook/vue3'

import Skeleton from './Skeleton.vue'

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  component: Skeleton,
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: `
    <Skeleton v-bind="args"></Skeleton>`,
  }),
  argTypes: {
    shape: { control: 'select', options: ['rectangle', 'circle'] },
    animation: { control: 'select', options: ['wave', 'pulse', 'none'] },
  },
  args: {
    height: 40,
    width: 400,
    borderRadius: 6,
  },
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
}
