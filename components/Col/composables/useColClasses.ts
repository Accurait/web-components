import { cva, type VariantProps } from 'class-variance-authority'

// define the props
export type ColVariantProps = VariantProps<typeof useColClasses>

export const useColClasses = cva([''], {
  variants: {
    sm: {
      DEFAULT: '',
      '1': 'w-1/12',
      '2': 'w-2/12',
      '3': 'w-3/12',
      '4': 'w-4/12',
      '5': 'w-5/12',
      '6': 'w-6/12',
      '7': 'w-7/12',
      '8': 'w-8/12',
      '9': 'w-9/12',
      '10': 'w-10/12',
      '11': 'w-11/12',
      '12': 'w-full',
      full: 'w-full',
    },
    md: {
      DEFAULT: '',
      '1': 'md:w-1/12',
      '2': 'md:w-2/12',
      '3': 'md:w-3/12',
      '4': 'md:w-1/4',
      '5': 'md:w-5/12',
      '6': 'md:w-1/2',
      '7': 'md:w-7/12',
      '8': 'md:w-8/12',
      '9': 'md:w-9/12',
      '10': 'md:w-10/12',
      '11': 'md:w-11/12',
      '12': 'md:w-full',
      full: 'md:w-full',
    },
    lg: {
      DEFAULT: '',
      '1': 'lg:w-1/12',
      '2': 'lg:w-2/12',
      '3': 'lg:w-3/12',
      '4': 'lg:w-1/4',
      '5': 'lg:w-5/12',
      '6': 'lg:w-1/2',
      '7': 'lg:w-7/12',
      '8': 'lg:w-8/12',
      '9': 'lg:w-9/12',
      '10': 'lg:w-10/12',
      '11': 'lg:w-11/12',
      '12': 'lg:w-full',
      full: 'lg:w-full',
    },
    xl: {
      DEFAULT: '',
      '1': 'xl:w-1/12',
      '2': 'xl:w-2/12',
      '3': 'xl:w-3/12',
      '4': 'xl:w-1/4',
      '5': 'xl:w-5/12',
      '6': 'xl:w-1/2',
      '7': 'xl:w-7/12',
      '8': 'xl:w-8/12',
      '9': 'xl:w-9/12',
      '10': 'xl:w-10/12',
      '11': 'xl:w-11/12',
      '12': 'xl:w-full',
      full: 'xl:w-full',
    },
    '2xl': {
      DEFAULT: '',
      '1': '2xl:w-1/12',
      '2': '2xl:w-2/12',
      '3': '2xl:w-3/12',
      '4': '2xl:w-1/4',
      '5': '2xl:w-5/12',
      '6': '2xl:w-1/2',
      '7': '2xl:w-7/12',
      '8': '2xl:w-8/12',
      '9': '2xl:w-9/12',
      '10': '2xl:w-10/12',
      '11': '2xl:w-11/12',
      '12': '2xl:w-full',
      full: '2xl:w-full',
    },
  },

  defaultVariants: {
    sm: 'DEFAULT',
    md: 'DEFAULT',
    lg: 'DEFAULT',
    xl: 'DEFAULT',
    '2xl': 'DEFAULT',
  },
})
