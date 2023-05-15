import { cva, type VariantProps } from 'class-variance-authority'

// define the props
export type RowVariantProps = VariantProps<typeof useRowClasses>

export const useRowClasses = cva(['flex w-full flex-wrap'], {
  variants: {},

  defaultVariants: {},
})
