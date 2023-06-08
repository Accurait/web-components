import type { Meta, StoryObj } from '@storybook/vue3'
import { FormKit } from '@formkit/vue'
import { universalArgs, universalArgTypes } from '~/stories/formkit/argTypes'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof FormKit> = {
  title: 'FormKit/Text',
  component: FormKit,
  tags: ['autodocs'],
  argTypes: {
    ...universalArgTypes,
    maxlength: {
      control: 'number',
      description: 'The maximum length of the input',
    },
    minlength: {
      control: 'number',
      description: 'The minimum length of the input',
    },
    placeholder: {
      control: 'text',
      description: 'The placeholder of the input',
    },
  },
  args: {
    ...universalArgs,
    type: 'text',
  },
}

export default meta

type Story = StoryObj<typeof FormKit>

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Basic: Story = {
  args: {
    label: 'Your username',
    value: 'calypso',
    help: 'Pick a username people will remember!',
  },
}
