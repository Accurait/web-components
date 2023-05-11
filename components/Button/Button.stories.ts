import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './Button.vue'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  render: (args) => ({
    components: { Button },
    setup() {
      const onClick = () => {
        args.loading = true
      }
      return { args, onClick }
    },
    template:
      '<Button v-bind="args" @click="onClick">{{args.content}}</Button>',
  }),
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'link'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    ring: { control: 'boolean', options: [false, true] },
    shape: { control: 'select', options: ['pill', 'default'] },
  },
  args: {
    content: 'Click me',
    loading: false,
    color: 'primary',
    ring: false,
    disabled: false,
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

export const Link: Story = {
  args: {
    to: 'https://www.google.com',
  },
}

export const Customize: Story = {
  args: {
    class: 'bg-green-700 dark:bg-green-400 dark:text-black',
  },
}
