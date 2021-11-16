import * as S from '#/components/heading/styles'
import { HeadingProps } from '#/components/heading/types'

export const Heading = ({
  children,
  lineColor = 'red',
  color = 'white',
  size = 'medium',
  lineBottom = false,
  lineLeft = false
}: HeadingProps) => (
  <S.Wrapper
    lineColor={lineColor}
    color={color}
    lineBottom={lineBottom}
    lineLeft={lineLeft}
    size={size}
  >
    {children}
  </S.Wrapper>
)
