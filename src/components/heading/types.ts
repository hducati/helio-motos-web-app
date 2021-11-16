export type LineColors = 'red'

export type HeadingProps = {
  children: React.ReactNode
  lineColor?: LineColors
  size?: 'small' | 'medium'
  color?: 'black' | 'white'
  lineLeft?: boolean
  lineBottom?: boolean
}
