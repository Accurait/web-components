import type { Meta, StoryObj } from '@storybook/vue3'

import Disclosure from './Disclosure.vue'

const meta: Meta<typeof Disclosure> = {
  title: 'Disclosure',
  component: Disclosure,
  render: (args) => ({
    components: { Disclosure },
    setup() {
      return { args }
    },
    template: `
    <Disclosure v-bind="args">
      <div class="px-4 pt-4 pb-2 text-sm text-gray-500">Content to display</div>
    </Disclosure>`,
  }),
  argTypes: {},
  args: {
    buttonContent: 'Show or hide content',
  },
}

//👇 This default export determines where your story goes in the story list
export default meta
type Story = StoryObj<typeof Disclosure>

export const Primary: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
}
