import type { Meta } from '@storybook/vue3'
import { FormKit } from '@formkit/vue'

export const universalArgTypes: Meta<typeof FormKit>['argTypes'] = {
  config: {
    control: 'object',
    description:
      'Configuration options to provide to the input’s node and any descendant node of this input.',
    table: {
      category: 'Universal',
      type: { summary: 'object' },
    },
  },
  delay: {
    control: 'number',
    defaultValue: 20,
    description:
      'Number of milliseconds to debounce an input’s value before the commit hook is dispatched.',
    table: {
      category: 'Universal',
      type: { summary: 'number' },
      defaultValue: { summary: 20 },
    },
  },
  dirtyBehavior: {
    control: 'radio',
    options: ['touched', 'compare'],
    defaultValue: 'touched',
    description:
      'Determines how the "dirty" flag of this input is set. Can be set to touched or compare — touched (the default) is more performant, but will not detect when the form is once again matching its initial state.',
    table: {
      category: 'Universal',
      type: { summary: ['touched', 'compare'] },
      defaultValue: { summary: 'touched' },
    },
  },
  errors: {
    control: 'array',
    description: 'Array of strings to show as error messages on this field.',
    table: {
      category: 'Universal',
      type: { summary: 'array' },
    },
  },
  help: {
    control: 'text',
    description: 'Text for help text associated with the input.',
    table: {
      category: 'Universal',
      type: { summary: 'string' },
    },
  },
  id: {
    control: 'text',
    description:
      'The unique id of the input. Providing an id also allows the input’s node to be globally accessed.',
    table: {
      category: 'Universal',
      type: { summary: 'string' },
      defaultValue: {
        summary: 'input_{n}',
        detail: 'where {n} is the input’s index',
      },
    },
  },
  ignore: {
    control: 'boolean',
    defaultValue: false,
    description:
      'Prevents an input from being included in any parent (group, list, form, etc). Useful when using inputs for UI instead of actual values.',
    table: {
      category: 'Universal',
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  index: {
    control: 'number',
    description:
      'Allows an input to be inserted at the given index if the parent is a list. If the input’s value is undefined, it inherits the value from that index position. If it has a value it inserts it into the lists’s values at the given index.',
    table: {
      category: 'Universal',
      type: { summary: 'number' },
    },
  },
  label: {
    control: 'text',
    description: 'Text for the label element associated with the input.',
    table: {
      category: 'Universal',
      type: { summary: 'string' },
    },
  },
  name: {
    control: 'text',
    description:
      'The name of the input as identified in the data object. This should be unique within a group of fields.',
    table: {
      category: 'Universal',
      type: { summary: 'string' },
      defaultValue: {
        summary: 'input_{n}',
        detail: 'where {n} is the input’s index',
      },
    },
  },
  parent: {
    control: null,
    description:
      'By default, the parent is a wrapping group, list, or form — but this prop allows explicit assignment of the parent node.',
    table: {
      category: 'Universal',
      type: { summary: 'FormKitNode' },
    },
  },
  prefixIcon: {
    control: 'text',
    description: 'Specifies an icon to put in the prefixIcon section.',
    table: {
      category: 'Universal',
      type: { summary: 'string' },
    },
  },
  preserve: {
    control: 'boolean',
    defaultValue: false,
    description:
      'Preserves the value of the input on a parent group, list, or form when the input unmounts.',
    table: {
      category: 'Universal',
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  preserveErrors: {
    control: 'boolean',
    defaultValue: false,
    description:
      'By default, errors set on inputs using setErrors are automatically cleared on input, setting this prop to true maintains the error until it is explicitly cleared.',
    table: {
      category: 'Universal',
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  sectionsSchema: {
    control: 'object',
    description:
      'An object of section keys and schema partial values, where each schema partial is applied to the respective section.',
    table: {
      category: 'Universal',
      type: { summary: 'object' },
    },
  },
  suffixIcon: {
    control: 'text',
    description: 'Specifies an icon to put in the suffixIcon section.',
    table: {
      category: 'Universal',
      type: { summary: 'string' },
    },
  },
  type: {
    control: false,
    defaultValue: 'text',
    description: 'The type of input to render from the library.',
    table: {
      category: 'Universal',
      type: { summary: 'string' },
    },
  },
  validation: {
    control: 'text',
    description: 'The validation rules to be applied to the input.',
    table: {
      category: 'Universal',
      subcategory: 'Validation',
      type: { summary: ['string', 'array'] },
    },
  },
  validationVisibility: {
    control: 'radio',
    options: ['blur', 'dirty', 'live'],
    defaultValue: 'blur',
    description:
      "Determines when to show an input's failing validation rules. Valid values are blur, dirty, and live.",
    table: {
      category: 'Universal',
      subcategory: 'Validation',
      type: { summary: ['blur', 'dirty', 'live'] },
      defaultValue: { summary: 'blur' },
    },
  },
  validationLabel: {
    control: 'text',
    description:
      'Determines what label to use in validation error messages. By default, it uses the label prop if available, otherwise it uses the name prop.',
    table: {
      category: 'Universal',
      subcategory: 'Validation',
      type: { summary: 'string' },
      defaultValue: {
        summary: '{label prop}',
        detail: 'where {label prop} is the value of the label',
      },
    },
  },
  validationRules: {
    control: 'object',
    description:
      'Additional custom validation rules to make available to the validation prop.',
    table: {
      category: 'Universal',
      subcategory: 'Validation',
      type: { summary: 'object' },
    },
  },
  value: {
    control: null,
    description:
      'Seeds the initial value of an input and/or its children. Not reactive. Can seed entire groups (forms) and lists.',
    table: {
      category: 'Universal',
    },
  },
  disabled: {
    control: 'boolean',
    defaultValue: false,
    description: 'Disables the input.',
    table: {
      category: 'Universal',
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  readonly: {
    control: 'boolean',
    defaultValue: false,
    description: 'Makes the input readonly.',
    table: {
      category: 'Universal',
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
}

export const universalArgs: Partial<
  Record<keyof typeof universalArgTypes, any>
> = {}

for (const prop in universalArgTypes) {
  if (prop in universalArgTypes) {
    const propConfig = universalArgTypes[prop] as { defaultValue?: any }
    if (typeof propConfig.defaultValue !== 'undefined') {
      universalArgs[prop] = propConfig.defaultValue
    }
  }
}
