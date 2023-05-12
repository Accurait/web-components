import { cva, type VariantProps } from 'class-variance-authority'

// define the props
export type DisclosureVariantProps = VariantProps<typeof useDisclosureClasses>

export const useDisclosureClasses = cva(['mx-auto w-full rounded-2xl p-2'])
export const useButtonClasses = cva([
  'flex w-full justify-between rounded-lg bg-blue-500 px-4 py-2 text-left text-white hover:bg-blue-300',
])
