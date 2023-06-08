import type { Meta, StoryObj } from '@storybook/vue3'
import { FormKit } from '@formkit/vue'
import { universalArgs, universalArgTypes } from '~/stories/formkit/argTypes'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof FormKit> = {
  title: 'FormKit/Date',
  component: FormKit,
  tags: ['autodocs'],
  argTypes: {
    ...universalArgTypes,
    min: {
      control: 'date',
      description:
        'The earliest date that can be selected. Must be a valid date string or a Date object.',
    },
    max: {
      control: 'date',
      description:
        'The latest date that can be selected. Must be a valid date string or a Date object.',
    },
    step: {
      control: 'number',
      description:
        'The granularity with which the date can be selected. Must be a positive integer.',
      table: {
        defaultValue: { summary: 'auto' },
      },
    },
  },
  args: {
    ...universalArgs,
    type: 'date',
  },
}

export default meta

type Story = StoryObj<typeof FormKit>

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Basic: Story = {
  args: {
    label: 'Birthday',
    value: '2011-01-01',
    help: 'Enter your birth day',
    validation: 'required|date_before:2010-01-01',
    validationVisibility: 'live',
  },
}
