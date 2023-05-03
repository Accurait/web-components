import type { Meta, StoryObj } from '@storybook/vue3'

import Panel from './Panel.vue'

const meta: Meta<typeof Panel> = {
  title: 'Panel',
  component: Panel,
  render: (args) => ({
    components: { Panel },
    setup() {
      return { args }
    },
    template: '<Panel v-bind="args">{{args.content}}</Panel>',
  }),
  argTypes: {
    size: { control: 'select', options: ['flexible', 'full'], defaultValue: 'flexible' },
  },
  args: {
    content: `  In esse consequat incididunt in.`,
  },
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof Panel>

export const Primary: Story = {
}

export const Customize: Story = {
  args: {
    //👇 The args you need here will depend on your component
    class: 'w-1/2 bg-green-400 dark:bg-green-700 dark:text-white',
  },
}
