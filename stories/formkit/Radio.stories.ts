import type { Meta, StoryObj } from '@storybook/vue3'
import { FormKit } from '@formkit/vue'
import { universalArgs, universalArgTypes } from '~/stories/formkit/argTypes'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof FormKit> = {
  title: 'FormKit/Radio',
  component: FormKit,
  tags: ['autodocs'],
  argTypes: {
    ...universalArgTypes,
    // options	Array/Object	[]	An object of value/label pairs or an array of strings, or an array of objects that must contain a label and value property.
    // on-value	any	true	The value when the checkbox is checked (single checkboxes only).
    // off-value	any	false	The value when the checkbox is unchecked (single checkboxes only).
    decoratorIcon: {
      control: 'text',
      description:
        'Specifies an icon to put in the decoratorIcon section. Shows when the radio is checked.',
      table: {
        defaultValue: { summary: 'radioDecorator' },
      },
    },
    options: {
      control: 'object',
      description:
        'An object of value/label pairs or an array of strings, or an array of objects that must contain a label and value property.',
      table: {
        type: { summary: ['object', 'array'] },
      },
    },
  },
  args: {
    ...universalArgs,
    type: 'radio',
  },
}

export default meta

type Story = StoryObj<typeof FormKit>

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const ArrayOfStrings: Story = {
  name: 'Array of strings',
  args: {
    label: 'Preferred transportation',
    options: ['E-Bike', 'E-Scooter', 'Electric car', 'Walking', 'Space tube'],
    help: 'How do you like to get around?',
  },
}

export const ValueLabelObject: Story = {
  name: 'Value / Label object',
  args: {
    label: 'Stuffed animal',
    options: {
      teddy: 'Bear',
      lama: 'Lama',
      lizard: 'Lizard',
      giraffe: 'Giraffe',
    },
    help: 'What is your favorite stuffed animal?',
  },
}

export const ArrayOfObjects: Story = {
  name: 'Array of objects',
  args: {
    label: 'Best movie',
    options: [
      { label: 'Shawshank redemption', value: 'shawshank' },
      { label: 'The Godfather', value: 'godfather' },
      {
        label: 'Casablanca (too old)',
        value: 'casablanca',
        attrs: { disabled: true },
      },
      { label: 'The Lord of the Rings', value: 'lotr' },
      { label: 'Saving Private Ryan', value: 'saving-ryan' },
    ],
    help: 'What is the best movie of all time?',
  },
}
