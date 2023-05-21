import { cva, type VariantProps } from 'class-variance-authority'

// define the props
export type TooltipVariantProps = VariantProps<typeof useTooltipClasses>

export const useTooltipClasses = cva(
  [
    'absolute',
    'left-0',
    'top-0',
    'z-50',
    'cursor-default',
    'rounded-md',
    'bg-gray-800',
    'px-3',
    'py-1.5',
    'text-sm',
    'text-white',
  ],
  {
    variants: {},
    compoundVariants: [],
    defaultVariants: {},
  }
)
