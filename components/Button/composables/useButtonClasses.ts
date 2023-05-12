import { cva, type VariantProps } from 'class-variance-authority'

// define the props
export type ButtonVariantProps = VariantProps<typeof useButtonClasses>

export const useButtonClasses = cva(
  [
    'focus:ring-4',
    'focus:outline-none',
    'font-medium',
    'rounded-lg',
    'text-sm',
    'px-5',
    'py-2.5',
    'inline-flex justify-center items-center',
  ],
  {
    variants: {
      color: {
        primary: ['bg-btn-primary text-btn-primary-text'],
        secondary: ['bg-tn-secondary text-btn-secondary-text'],
        link: ['bg-btn-link'],
      },
      size: {
        sm: ['text-xs', 'px-3', 'py-2'],
        md: ['text-sm', 'px-5', 'py-2.5'],
        lg: ['text-base', 'px-6', 'py-3'],
      },
      shape: {
        pill: ['rounded-full'],
      },
      ring: {
        false: ['focus:ring-0'],
        true: ['focus:ring-4'],
      },
    },

    compoundVariants: [
      {
        color: 'primary',
        ring: true,
        class: 'ring-btn-primary-ring',
      },
      {
        color: 'secondary',
        ring: true,
        class: 'ring-btn-secondary-ring',
      },
      {
        color: 'link',
        ring: true,
        class: 'focus:ring-0',
      },
    ],
    defaultVariants: {
      size: 'md',
      ring: false,
      color: 'primary',
    },
  }
)
