import { cva, type VariantProps } from 'class-variance-authority'

// define the props
export type PanelVariantProps = VariantProps<typeof usePanelClasses>

export const usePanelClasses = cva(['p-4 mx-auto rounded-lg t-4 md:p-11'], {
  variants: {
    size: {
      flexible: ['w-auto', 'inline-block'],
      full: ['block'],
    },
    color: {
      primary: ['bg-zinc-100', 'dark:bg-zinc-600', 'dark:text-white'],
    },
  },
  defaultVariants: {
    size: 'flexible',
    color: 'primary',
  },
})
