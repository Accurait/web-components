import type { Meta, StoryObj } from '@storybook/vue3'
import { FormKit } from '@formkit/vue'
import { universalArgs, universalArgTypes } from '~/stories/formkit/argTypes'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof FormKit> = {
  title: 'FormKit/Textarea',
  component: FormKit,
  tags: ['autodocs'],
  argTypes: {
    ...universalArgTypes,
    cols: {
      control: 'number',
      description: 'The number of columns to display',
      defaultValue: 20,
      table: {
        defaultValue: { summary: 20 },
      },
    },
    rows: {
      control: 'number',
      description: 'The number of rows to display',
    },
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
    type: 'textarea',
    cols: 20,
  },
}

export default meta

type Story = StoryObj<typeof FormKit>

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Basic: Story = {
  args: {
    label: 'Your Essay',
    value: '10',
    placeholder: 'Remember to write in complete sentences.',
    help: "I'll know if you didn't read the book!",
  },
}
