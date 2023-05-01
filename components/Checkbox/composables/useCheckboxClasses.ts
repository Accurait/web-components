import { cva, type VariantProps } from 'class-variance-authority'

// checkbox classes
export type CheckboxVariantProps = VariantProps<typeof useCheckboxClasses>

export const useCheckboxClasses = cva(['focus:ring-2', 'w-4', 'h-4'], {
  variants: {
    intent: {
      primary: [
        'accent-blue-600',
        'bg-gray-100',
        'border-gray-300',
        'focus:ring-blue-500',
        'dark:focus:ring-blue-600',
        'dark:ring-offset-gray-800',
        'dark:bg-gray-700',
        'dark:border-gray-600',
      ],
    },
    shape: {
      round: ['rounded'],
    },
  },
  // default values
  defaultVariants: {
    intent: 'primary',
    shape: 'round',
  },
})

// label classes
export type CheckboxLabelVariantProps = VariantProps<typeof useCheckboxLabelClasses>

export const useCheckboxLabelClasses = cva(['ml-2', 'text-sm', 'font-medium'], {
  variants: {
    intent: {
      primary: ['text-gray-900', 'dark:text-gray-300'],
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})