import { cva, type VariantProps } from 'class-variance-authority'

// define the props
export type ButtonVariantProps = VariantProps<typeof useButtonClasses>

export const useButtonClasses = cva(
  [
    'text-white',
    'focus:ring-4',
    'focus:outline-none',
    'focus:ring-blue-300',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'px-5',
    'py-2.5',
    'mr-2',
    'mb-2',
  ],
  {
    variants: {
      color: {
        primary: [
          'bg-blue-700',
          'hover:bg-blue-800',
          'dark:bg-blue-600',
          'dark:hover:bg-blue-700',
          'dark:focus:ring-blue-800',
        ],
        secondary: [
          'bg-gray-700',
          'hover:bg-gray-800',
          'dark:bg-gray-600',
          'dark:hover:bg-gray-700',
          'dark:focus:ring-gray-800',
        ],
      },
      size: {
        sm: ['text-xs', 'px-3', 'py-2'],
        md: ['text-sm', 'px-5', 'py-2.5'],
        lg: ['text-base', 'px-6', 'py-3'],
      },
      shape: {
        pill: ['rounded-full'],
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  }
)
