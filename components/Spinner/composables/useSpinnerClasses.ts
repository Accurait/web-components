import { cva, type VariantProps } from 'class-variance-authority'

export type SpinnerVariantProps = VariantProps<typeof useSpinnerClasses>

// use cva to create css class with tailwind
export const useSpinnerClasses = cva(
  ['inline', 'mr-2', 'text-gray-200', 'animate-spin', 'dark:text-gray-600'],
  {
    variants: {
      color: {
        primary: ['fill-blue-600'],
      },
      size: {
        sm: ['w-6', 'h-6'],
        md: ['w-8', 'h-8'],
        lg: ['w-10', 'h-10'],
      },
    },
    // default values
    defaultVariants: {
      color: 'primary',
      size: 'md',
    },
  }
)
