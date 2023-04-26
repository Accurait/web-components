import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">{{args.content}}</Button>',
  }),
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
  args: {
    content: 'Click me'
  },

}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
}

export const Pill: Story = {
  args: {
    shape: 'pill',
  },
}

export const Customize: Story = {
  args: {
    customize: 'bg-green-700 dark:bg-green-400 dark:text-black'
  },
}
