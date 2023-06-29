import type { ToRefs } from 'vue'
import classNames from 'classnames'
import { SkeletonProps } from '../types'

const DEFAULT = {
  backgroundColor: 'bg-gray-300 dark:bg-gray-700',
  animationColor: 'after:via-gray-400 dark:after:via-gray-600',
  width: '100%',
  height: '1rem',
  borderRadius: '6px',
}

function resolveSize(value: string | number): string {
  if (typeof value === 'number') {
    return value + 'px'
  }

  return value
}

export function useSkeletonClasses(props: ToRefs<SkeletonProps>) {
  const attrs = useAttrs()

  const containerStyle = computed(() => {
    const classes = attrs.class as string | undefined
    const size = unref(props.size)

    const width = classes?.includes('w-')
      ? undefined
      : size
      ? resolveSize(size)
      : resolveSize(props.width.value || DEFAULT.width)
    const height = classes?.includes('h-')
      ? undefined
      : size
      ? resolveSize(size)
      : resolveSize(props.height.value || DEFAULT.height)
    const borderRadius =
      classes?.includes('rounded') || props.shape.value === 'circle'
        ? undefined
        : resolveSize(props.borderRadius.value || DEFAULT.borderRadius)

    return { width, height, borderRadius }
  })

  const containerClass = computed(() => {
    const defaultClass = 'relative overflow-hidden'
    const defaultAnimationClass =
      'after:absolute after:inset-0 after:h-full after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:to-transparent'
    const animation =
      props.animation.value === 'wave'
        ? 'after:animate-wave'
        : props.animation.value === 'pulse'
        ? 'after:animate-pulse'
        : props.animation.value === 'none'
        ? 'after:animate-none'
        : ''
    const bgColor = (attrs.class as string)?.includes('bg-')
      ? ''
      : DEFAULT.backgroundColor
    const animationColor = (attrs.class as string)?.includes('after:via-')
      ? ''
      : DEFAULT.animationColor
    const shape = props.shape.value === 'circle' ? 'rounded-full' : ''

    return classNames(
      defaultClass,
      defaultAnimationClass,
      animation,
      bgColor,
      animationColor,
      shape
    )
  })

  return {
    containerClass,
    containerStyle,
  }
}
