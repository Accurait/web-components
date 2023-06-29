export type SkeletonShape = 'rectangle' | 'circle'
export type SkeletonSize = number | string
export type SkeletonWidth = number | string
export type SkeletonHeight = number | string
export type SkeletonBorderRadius = number | string
export type SkeletonAnimation = 'wave' | 'pulse' | 'none'

export interface SkeletonProps {
  shape: SkeletonShape
  size: SkeletonSize
  width: SkeletonWidth
  height: SkeletonHeight
  borderRadius: SkeletonBorderRadius
  animation: SkeletonAnimation
}
