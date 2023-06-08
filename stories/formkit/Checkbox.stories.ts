import type { Meta, StoryObj } from '@storybook/vue3'
import { FormKit } from '@formkit/vue'
import { universalArgs, universalArgTypes } from '~/stories/formkit/argTypes'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof FormKit> = {
  title: 'FormKit/Checkbox',
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
        'Specifies an icon to put in the decoratorIcon section. Shows when the checkbox is checked.',
      table: {
        defaultValue: { summary: 'checkboxDecorator' },
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
    onValue: {
      control: null,
      defaultValue: true,
      description:
        'The value when the checkbox is checked (single checkboxes only).',
      table: {
        defaultValue: { summary: true },
      },
    },
    offValue: {
      control: null,
      defaultValue: false,
      description:
        'The value when the checkbox is unchecked (single checkboxes only).',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    ...universalArgs,
    type: 'checkbox',
    onValue: true,
    offValue: false,
  },
}

export default meta

type Story = StoryObj<typeof FormKit>

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const SingleCheckbox: Story = {
  args: {
    label: 'Terms and Conditions',
    help: 'Do you agree to our terms of service?',
    name: 'terms',
    value: true,
    validation: 'accepted',
    validationVisibility: 'dirty',
  },
}

export const MultipleCheckboxes: Story = {
  args: {
    label: 'Toppings',
    options: ['Mushrooms', 'Olives', 'Salami', 'Anchovies'],
    decoratorIcon: 'happy',
    help: 'Select your pizza toppings',
    validation: 'required|min:3',
  },
}
